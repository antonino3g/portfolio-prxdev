# Handoff — Migração do portfólio para React + Vite

> Documento de retomada. **Migração EXECUTADA e validada** (T1–T5 concluídas).
> Arquitetura, decisões e o que foi validado: `docs/arquitetura.md`.
> Nada foi commitado — o working tree tem a migração inteira por commitar.
>
> **Antes de commitar, leia a seção "Estado do git" abaixo** — há risco de
> derrubar o site atualmente no ar.

## Estado do git — PUBLICADO ✅

Migração commitada e no ar em https://antonino3g.github.io/portfolio-prxdev/
(Pages configurado como "GitHub Actions" pelo usuário; o workflow publicou).

Commits na `main`:

| hash | commit |
|---|---|
| `066402e` | feat: migra o portfólio para React + Vite + TypeScript |
| `a34f2eb` | ci: publica no Pages pelo deploy oficial do GitHub Actions |
| `d10fd26` | docs: adiciona README em inglês e a documentação da arquitetura |

Validado em produção: HTML novo servido, bundles com os mesmos hashes do build
local, e HTTP 200 em favicons, vídeos, imagens e nos dois PDFs de currículo.

Nenhum commit leva trailer de co-autoria — coerente com a limpeza de histórico.

**Sobrou para limpar**: o branch remoto `gh-pages` ficou órfão (só tem um
`.nojekyll`) e pode ser apagado. `handoff.md` segue **fora do versionamento**
de propósito (notas de trabalho com caminhos locais).

## Objetivo

Portar o protótipo HTML já pronto para um projeto **React + Vite + TypeScript**,
mantendo **conteúdo e layout idênticos**, pronto para deploy no GitHub Pages.

## Caminhos importantes

- **Destino (repo):** `C:\Users\anton\OneDrive\Documentos\git\portfolio-prxdev`
  - Hoje só tem `.git` e `.github/workflows/deploy.yml` (build Vite → publica `./dist` no branch `gh-pages`).
  - Remote: `https://github.com/antonino3g/portfolio-prxdev.git`
- **Protótipo (origem):** `C:\Users\anton\AppData\Roaming\Open Design\namespaces\release-stable-win\data\projects\bec883c5-0296-4a59-bc3b-e9487493c0f5`
  - Arquivo principal: `portfolio-antonino-junior.html` (~1450 linhas, HTML+CSS+JS vanilla, single-file).
  - `brand-spec.md` — contrato do design system (tokens, postura, decisões). **Leitura obrigatória.**
  - `plano-aba-conquistas.md` — plano da feature das abas.
  - `assets/` — 4 vídeos mp4 (~35MB total), imagens PNG/JPG, retrato JPG.
  - PDFs na raiz do protótipo: `Antonino Junior - CV BR.pdf` e `Antonino Junior - RESUME.pdf`.

## Decisões travadas com o usuário (NÃO re-perguntar)

| Tema | Decisão |
|---|---|
| Linguagem | **TypeScript** |
| Estrutura/estilo | **Componentizado + CSS puro global** (tokens `:root` copiados sem alteração; não usar CSS Modules) |
| i18n | **Context React próprio + dicionário** (portar o `DICT`; sem react-i18next) |
| Deploy/base | **Project page** → `base: '/portfolio-prxdev/'` no `vite.config.ts` (URL: antonino3g.github.io/portfolio-prxdev/) |
| Vídeos mp4 | **Comprimir com ffmpeg antes de commitar** (H.264, bitrate menor, sem áudio) — reportar antes/depois |
| Testes | **Sem testes por enquanto** (⚠️ contraria a diretriz de testes obrigatórios do CLAUDE.md — retomar em ciclo futuro) |

## Ferramentas confirmadas no ambiente

- ffmpeg 8.1.2 ✅ · Node v20.11.1 · npm 10.2.4
- (deploy.yml usa Node 18 — compatível)

## Estrutura do protótipo (o que precisa ser portado)

- **Design system Claude/Anthropic**: tokens em `:root` (cores pergaminho/terracota, serifa peso 500 em títulos, sans no resto). Contrato — nada de hex cru fora do `:root`.
- **Header sticky**: marca "Antonino Junior" + seletor de idioma PT/EN/ES (bandeiras SVG inline) + nav (Stack/Projetos/Experiências/Formação).
- **Hero**: retrato 4:5, cargo "Software Engineer", bio, localização, botões sociais (GitHub/LinkedIn/Instagram SVG) + CTA "Currículo (PDF)" em terracota (troca de arquivo por idioma: PT→CV BR, EN/ES→RESUME).
- **01 Stack**: painel com 6 linhas (Linguagens; Back-end & Integração; Front-end & Mobile; Dados/Nuvem/DevOps; IA & Automação; Arquitetura & Práticas).
- **02 Trabalho**: segmented control com abas **Projetos** (6 cards) e **Conquistas** (3 cards). Acessível (setas ←→/Home/End, aria-selected, hidden no painel inativo). Cards com capa (vídeo autoplay/loop/muted ou img), chip de empresa, badges de status, links.
- **03 Experiências**: roadmap vertical (`.rail`) — a linha preenche conforme o scroll (rAF + getBoundingClientRect), dots acendem, dot do cargo atual pulsa em terracota. Neutralizado sob `prefers-reduced-motion`. 8 paradas (cargos).
- **04 Formação**: 3 colunas (Acadêmica, Certificações Oracle com selo+link, Cursos).
- **Footer**: ano dinâmico + link "Topo".
- **JS vanilla a reescrever em hooks**: autoplay de vídeo (respeita reduced-motion), i18n (PT capturado do DOM → no React vira dicionário PT explícito; EN/ES no `DICT`; localStorage `aj-lang`; seta `lang` do html; troca href do CV), abas, animação do rail, scroll-spy da nav, ano do rodapé.

## Plano de execução — CONCLUÍDO

Modelo multi-agente (Sonnet executores, Opus valida executando):

- ✅ **T1** — Scaffold Vite 6 + React 19 + TS 5.9, `base: '/portfolio-prxdev/'`, `src/styles/global.css` (CSS do protótipo byte-a-byte), `src/lib/asset.ts`, imagens e PDFs em `public/`.
- ✅ **T2** — i18n: `LanguageProvider`/`useI18n`/`html()`, 76 chaves × 3 idiomas, tipadas (`Dictionary` obriga paridade), `localStorage aj-lang`, `cvFileName()`.
- ✅ **T3** — `Header` (+scroll-spy), `LangSwitcher`, `Hero`, `Footer`, `App`.
- ✅ **T4** — `Stack`, `Work` (abas + `ProjectCard`), `Experience` (trilho), `Education` + hooks `useReducedMotion`, `useAutoplayVideo`, `useRailProgress`.
- ✅ **T5** — 4 mp4 comprimidos: **26,11 MB → 1,25 MB (−95,2%)**, sem áudio, frames idênticos.

## Critérios de aceite — resultado

1. ✅ `npm run build` sem erros TS (build limpo do zero).
2. ⚠️ Visual idêntico — **inferido**, não observado: CSS idêntico (md5) + DOM
   equivalente (auditoria linha a linha). **Falta conferir a olho em navegador**
   (desktop/tablet/mobile); a extensão de browser não estava disponível.
3. ✅ PT/EN/ES troca textos, `lang`, `alt` e href do CV, e persiste no reload.
4. ✅ Abas (teclado ←/→/Home/End + foco) e roadmap, com reduced-motion.
5. ✅ `vite preview` sob `/portfolio-prxdev/` serve todos os assets (HTTP 200).

Validação executada: build + `diff`/`md5` do CSS + checagem HTTP dos assets +
**127 asserções em jsdom com efeitos rodando**, em 2 cenários de reduced-motion.
Detalhes e limites em `docs/arquitetura.md`.

## PRÓXIMO PASSO ao retomar

1. **Conferir o site a olho** (`npm run build && npm run preview` →
   `http://localhost:4173/portfolio-prxdev/`) em desktop/tablet/mobile — é o
   único critério de aceite ainda não verificado diretamente.
2. Resolver a questão do deploy/`docs/` (ver "Estado do git") e só então commitar.
3. Decidir sobre favicon/manifest e compressão das imagens (~4 MB em 3 arquivos).
4. Dívida assumida: **sem testes no repo** (contraria o `CLAUDE.md`). O harness
   jsdom usado na validação cobre o comportamento e pode virar suíte Vitest.

## Tarefas extras — situação

- ✅ **(a) Co-autoria removida do histórico.** Era **1 commit só** (`30e2f29`),
  presente em `main`, `1.0.0` e `new-version`. Reescrito com `filter-branch
  --msg-filter` num clone isolado e empurrado com `--force` nos 3 branches.
  Verificado no remoto: nenhuma menção sobrou; **árvores idênticas** às originais
  (só mudaram as mensagens e os hashes), autor e datas preservados.
  Novos hashes: `main e4c5537` · `1.0.0 8b307a1` · `new-version f8cf8f4`.
  Backup completo em bundle (todos os refs originais) no scratchpad da sessão.
- ✅ **(b) README.md em inglês**, com o convite a copiar/usar como base, o pedido
  de star e o aviso de que o conteúdo pessoal (fotos, CVs, vídeos) não deve ser
  republicado.
- ✅ **(c) Workflow migrado** para o deploy oficial do Pages
  (`upload-pages-artifact` + `deploy-pages`). **Falta o passo manual na
  interface** — ver "Como concluir o deploy" abaixo.

## Como concluir o deploy (⚠️ ordem importa — há janela de site fora do ar)

1. Commitar a migração (inclui a deleção de `docs/` e do projeto antigo) e
   empurrar para a `main`.
2. No GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Conferir a execução do workflow em Actions. Se ele tiver rodado antes do
   passo 2, refazer com "Re-run all jobs".
4. Só depois, se quiser limpar: apagar o branch `gh-pages` (órfão).

Entre o passo 1 e o 3 o site fica fora do ar (o `docs/` some antes de o novo
deploy publicar). Se preferir zero downtime, faça o passo 2 antes do 1.

### Registro original do planejamento

### a) Limpar co-autoria do Claude Code nos commits passados da `main`
- Remover as linhas `Co-Authored-By: Claude ...` (e qualquer menção ao Claude Code)
  dos commits **já existentes** na `main`.
- Requer **reescrita de histórico** (ex.: `git filter-repo --message-callback` ou
  `git rebase` interativo) + `git push --force`. ⚠️ Operação destrutiva no remoto —
  confirmar com o usuário antes e conferir se ninguém mais depende do histórico.
- Commits atuais na main a revisar (do git status inicial): `30e2f29`, `dc094c3`, etc.

### b) README.md em inglês — convite a copiar + pedido de star
- Escrever o README **em inglês**, dizendo que é um repositório simples que pode ser
  **copiado/usado livremente como base**, e que — se possível — **dar uma star (favoritar)**
  como forma de agradecimento seria bem legal. Tom leve e amigável.
- Observação: no plano da migração já havia um README em pt-BR de "como rodar". Decidir
  amanhã se o README fica só em inglês (com este convite) ou bilíngue.

### c) Migrar o CI/CD para GitHub Actions sem quebrar o deploy no Pages
- Situação atual: `.github/workflows/deploy.yml` **já é GitHub Actions**, mas usa o método
  antigo (`peaceiris/actions-gh-pages` → publica no branch `gh-pages`).
- Objetivo provável: migrar para o **deploy oficial do GitHub Pages via Actions**
  (`actions/upload-pages-artifact` + `actions/deploy-pages`, com `environment: github-pages`
  e `permissions: pages: write, id-token: write`), sem branch `gh-pages`.
- ⚠️ Confirmar com o usuário o que ele entende por "mudar pra Actions" (já é Actions).
  Garantir que o Pages continue servindo `dist` e que a `base` do Vite siga `/portfolio-prxdev/`.
- Após migrar, ajustar a config do Pages no GitHub (Source: GitHub Actions).

## Comunicação

Tudo em pt-BR (respostas, commits, comentários). Só commitar/empurrar quando o usuário pedir.
