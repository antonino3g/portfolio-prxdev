# Arquitetura — portfólio (React + Vite + TypeScript)

Documento do ciclo de migração do protótipo HTML single-file para uma aplicação
React. Descreve **o que existe**, **por que está assim** e **o que foi validado**.

## 1. Objetivo do ciclo

Portar `portfolio-antonino-junior.html` (~1450 linhas, HTML+CSS+JS vanilla) para
React + Vite + TypeScript **sem alterar conteúdo nem layout**, pronto para deploy
no GitHub Pages como *project page*.

Fidelidade era o requisito, não modernização: o protótipo é o contrato.

## 2. Estrutura de pastas

```
public/
  Antonino Junior - CV BR.pdf      # currículo pt-BR
  Antonino Junior - RESUME.pdf     # currículo en/es
  assets/                          # 8 imagens + 4 vídeos comprimidos
src/
  App.tsx                          # composição das seções
  main.tsx                         # bootstrap + import do CSS global
  components/
    Header.tsx  LangSwitcher.tsx  Hero.tsx  Footer.tsx
    Stack.tsx   Work.tsx  ProjectCard.tsx  Experience.tsx  Education.tsx
  hooks/
    useReducedMotion.ts  useAutoplayVideo.ts  useRailProgress.ts
  i18n/
    types.ts  pt.ts  en.ts  es.ts  LanguageContext.tsx  cv.ts  index.ts
  lib/asset.ts
  styles/global.css                # CSS do protótipo, intocado
```

## 3. Decisões e o porquê

### 3.1 CSS global puro, não CSS Modules
`src/styles/global.css` é **cópia byte-a-byte** do bloco `<style>` do protótipo
(md5 conferido). O `brand-spec.md` trata os tokens `:root` como contrato — "nada
de hex cru fora do `:root`". Componentizar o CSS abriria espaço para divergência
silenciosa do design system; manter o arquivo intocado torna qualquer desvio
visível num `diff`. Os componentes React só consomem as classes existentes e não
introduzem nenhuma classe nova.

### 3.2 i18n próprio, sem biblioteca
Contexto React + dicionários tipados, em vez de `react-i18next`: são 3 idiomas e
76 chaves estáticas, sem plurais, interpolação ou carregamento assíncrono — uma
dependência não pagaria seu custo.

Mudança relevante em relação ao protótipo: lá o **pt-BR era capturado do DOM** na
carga (a página funcionava sem JS e o idioma padrão nunca era duplicado). No
React isso não se aplica, então o pt virou **dicionário explícito**. O ganho é
verificação estática: `Dictionary = Record<TranslationKey, string>` obriga os três
idiomas a terem exatamente o mesmo conjunto de chaves — uma tradução faltando é
erro de compilação, não um buraco em produção.

As entidades HTML do dicionário original (`&amp;`) foram desescapadas, porque o
vanilla as aplicava via `innerHTML` e o React renderiza texto literal. As tags
reais (`<b>`) foram preservadas e são renderizadas com `dangerouslySetInnerHTML`
— usado **apenas** em `proj.postalapp`, o único texto com marcação. A fonte é o
dicionário do próprio projeto, não entrada de usuário.

Estado do idioma: `localStorage` na chave `aj-lang` (com `try/catch`, que pode
lançar em modo privado), padrão fixo `pt`, sem detecção por navegador — só a
escolha explícita do visitante muda o idioma. Um `useEffect` sincroniza o
atributo `lang` do `<html>`.

### 3.3 Animação de scroll escreve no DOM; abas usam estado React
Duas interações, dois tratamentos diferentes, de propósito:

- **Trilho das Experiências** (`useRailProgress`): o handler de `scroll` roda
  dentro de `requestAnimationFrame` e escreve direto em `style.height` e
  `classList` via `ref`. Passar isso por estado React re-renderizaria 8 paradas
  a cada quadro sem nenhum ganho — o DOM é o próprio estado aqui. A fórmula de
  progresso é idêntica à do protótipo.
- **Abas Projetos/Conquistas** (`Work.tsx`): estado React. A troca é rara, e o
  padrão de acessibilidade (tabindex roving, foco movido por seta/Home/End)
  precisa de refs e de renderização declarativa dos atributos ARIA.

Ambas respeitam `prefers-reduced-motion`: o trilho fica cheio e estático (sem
listeners), e os vídeos ficam pausados no primeiro quadro.

### 3.4 `asset()` e a base do GitHub Pages
O site é *project page* (`antonino3g.github.io/portfolio-prxdev/`), então
`vite.config.ts` usa `base: '/portfolio-prxdev/'`. Caminhos absolutos escritos à
mão (`/assets/...`) quebrariam em produção mas funcionariam em `dev` — falha que
só aparece depois do deploy. `src/lib/asset.ts` resolve tudo por
`import.meta.env.BASE_URL`, e o mesmo vale para o PDF do currículo
(`cvFileName()` devolve o nome percent-encoded, pois há espaços no nome).

### 3.5 `ProjectCard` compartilhado
Projetos e Conquistas usam a mesma anatomia de card (capa · chip · título ·
descrição · `.ptech` · badges/links) — como já previa o `plano-aba-conquistas.md`.
A capa é uma union discriminada: `video`, `video-portrait`, `img`, `img-portrait`.
As variantes *portrait* existem porque mídia vertical numa moldura 16:10 deixaria
letterbox morto: o protótipo resolve com uma cópia desfocada ao fundo
(`.pcover-bg`) e a mídia nítida contida à frente (`.pcover-fg`) — daí o card
carregar **dois** elementos de mídia.

### 3.6 Compressão dos vídeos
Os 4 mp4 são capas de card exibidas em ~285–380px de largura, então resolução de
origem (até 1898px) era desperdício de banda. Reencodados com H.264, CRF 30,
limite de 720px na maior dimensão, **sem áudio** (os vídeos são mudos por
definição) e `+faststart`:

| arquivo | antes | depois |
|---|---|---|
| mapa-de-saloes.mp4 | 10,60 MB | 0,28 MB |
| portal-postal.mp4 | 6,29 MB | 0,13 MB |
| checkout.mp4 | 5,56 MB | 0,15 MB |
| site-fotografia.mp4 | 3,67 MB | 0,69 MB |
| **total** | **26,11 MB** | **1,25 MB** (−95,2%) |

Contagem de frames idêntica à dos originais em todos os quatro.

## 4. O que foi validado, e como

Validação por execução — nada foi aceito por relato.

1. **Build**: `npm run build` (`tsc -b && vite build`) do zero, sem erros de TS.
2. **CSS**: `diff` + `md5sum` entre o bloco `<style>` do protótipo e
   `src/styles/global.css` — idênticos.
3. **Servido sob a base real**: `vite preview` em `/portfolio-prxdev/`, com
   verificação HTTP de cada asset (vídeos, imagens e os dois PDFs com espaço no
   nome) — todos `200`.
4. **Comportamento**: a aplicação foi montada em **jsdom com os efeitos rodando**
   e submetida a 127 asserções, em dois cenários (`prefers-reduced-motion`
   ligado e desligado), todas passando:
   - estrutura (6 linhas de stack, 6 projetos, 3 conquistas, 8 paradas, 12 linhas
     de formação, 4 seções);
   - i18n: troca pt/en/es alterando textos, atributo `lang`, `alt` do retrato e
     href do CV; persistência em `localStorage`; remontagem no idioma salvo;
     idioma inválido caindo para pt; ausência de entidades `&amp;` cruas;
   - abas: seleção padrão, `hidden` no painel inativo, tabindex roving,
     navegação por `←`/`→`/`Home`/`End` com foco movido, clique;
   - vídeo: `play()` em todos sob movimento normal; nenhum `play()` e `autoplay`
     removido sob reduced-motion;
   - trilho: altura aplicada; cheio e com todas as paradas acesas sob
     reduced-motion;
   - assets: todas as 16 referências de mídia sob `/portfolio-prxdev/assets/`.
5. **Auditoria de fidelidade** do markup, conteúdo, links, SVGs e chaves de i18n
   contra o protótipo, área por área.

### Limites desta validação (o que **não** foi verificado)

- **Não houve inspeção visual em navegador real** — a extensão de browser não
  estava disponível. A equivalência visual é *inferida* de duas evidências
  fortes (CSS idêntico byte-a-byte + DOM equivalente), não observada. Falta
  conferir a olho em desktop/tablet/mobile.
- jsdom não faz layout: `getBoundingClientRect` devolve zeros, então a
  *progressão* do trilho conforme o scroll não pôde ser medida — só o fato de a
  altura ser aplicada e o caminho de reduced-motion estar correto.
- **Não há suíte de testes automatizados no repositório.** Foi uma decisão
  explícita deste ciclo, e contraria a diretriz de testes obrigatórios do
  `CLAUDE.md`. O harness jsdom usado na validação é externo ao repo — converter
  esse harness em suíte Vitest é o caminho natural para quitar essa dívida.

## 5. Favicon

Três PNGs (`favicon-32`, `favicon-256`, `favicon-180` para apple-touch) em
`public/assets/`, declarados no `index.html`.

Detalhe que custou um bug: o href usa **`/assets/favicon-32.png`** — barra
inicial e **sem** `%BASE_URL%`. Com `%BASE_URL%` o caminho funciona no build mas
quebra no `npm run dev`, porque o dev server do Vite reescreve href absoluto
prefixando a base e o resultado sai duplicado
(`/portfolio-prxdev/portfolio-prxdev/assets/...`). Essa URL nem falha de forma
visível: cai no SPA fallback e devolve `text/html`, então o navegador só não
mostra ícone nenhum. Caminho relativo (`assets/...`) também funcionaria, mas
quebra se a URL vier sem a barra final. **Lição: validar caminho de asset nos
dois ambientes — dev e build —, nunca só num deles.**

## 6. Deploy

`.github/workflows/deploy.yml` usa o método **oficial** do GitHub Pages:
`actions/upload-pages-artifact` + `actions/deploy-pages`, com
`permissions: {contents: read, pages: write, id-token: write}`,
`environment: github-pages` e `concurrency: {group: pages, cancel-in-progress: false}`
(deploy de página deve enfileirar, não ser cancelado no meio). Build em Node 20
com `npm ci`.

Isso substituiu o `peaceiris/actions-gh-pages` → branch `gh-pages`, que estava
morto na prática: o `gh-pages` só continha um `.nojekyll` e o site no ar era
servido de `main → /docs` (build commitado). Confirmado na época comparando os
hashes de bundle do site publicado com os de `docs/` no HEAD.

> ⚠️ **O workflow só publica depois de mudar, em Settings → Pages, o Source para
> "GitHub Actions".** Enquanto isso não for feito, ele roda sem efeito visível.

## 7. Pendências conhecidas

- **Ativar o Pages via Actions** (passo manual na interface do GitHub) e só então
  remover `docs/` e o branch `gh-pages`, que ficam órfãos.
- **Peso das imagens**: `premio-inovacao.png` (2,0 MB), `retrato-antonino-junior.jpg`
  (994 KB) e `podcast-gloss.png` (979 KB) somam ~4 MB — hoje pesam mais que os
  quatro vídeos juntos. Compressão de imagem ficou fora do escopo deste ciclo.
- **`site.webmanifest` e `robots.txt`**: existiam no projeto antigo e não foram
  recuperados. O favicon já está resolvido.
- **Sem testes** (ver seção 4).
