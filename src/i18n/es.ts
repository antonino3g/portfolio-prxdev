import type { Dictionary } from './types';

/**
 * Dicionário es — copiado do objeto `DICT.es` do protótipo, com as
 * entidades HTML (`&amp;`, `&quot;`, `&#39;`) desescapadas. Tags `<b>`
 * são mantidas intactas para renderização via `dangerouslySetInnerHTML`.
 */
export const es: Dictionary = {
  'nav.stack': 'Stack',
  'nav.projetos': 'Proyectos',
  'nav.experiencias': 'Experiencia',
  'nav.formacao': 'Formación',
  'sobre.p1':
    'Ingeniero de Software con más de 6 años de experiencia en desarrollo Full Stack y Mobile, enfocado en la construcción de sistemas escalables y de alta disponibilidad. Desarrolla soluciones Web y Backend con Java, Spring Boot, Jakarta EE, Golang, Node.js (con BullMQ para procesamiento en cola), Angular y ReactJS, además de crear y publicar aplicaciones en Flutter con más de 5 mil descargas en la Play Store. Trabaja también con bases de datos PostgreSQL, MySQL y Redis, automatización en Python/Selenium e infraestructura en la nube AWS y OCI (Certified Architect).',
  'hero.local': 'Florianópolis, SC — Brasil',
  'hero.alt': 'Antonino Junior, retrato de perfil sobre fondo oscuro',
  'cv.label': 'Currículum (PDF)',
  'sec.stack': 'Stack',
  'stack.k1': 'Lenguajes',
  'stack.k2': 'Back-end e Integración',
  'stack.k3': 'Front-end & Mobile',
  'stack.k4': 'Datos, Nube & DevOps',
  'stack.k5': 'IA & Automatización',
  'stack.k6': 'Arquitectura & Prácticas',
  'sec.trabalho': 'Trabajo',
  'tab.projetos': 'Proyectos',
  'tab.conquistas': 'Logros',
  'proj.mapa': 'Plataforma que conecta a +15 mil profesionales de belleza, B2B con B2C.',
  'badge.live': 'En producción',
  'proj.checkout.t': 'Checkout propietario',
  'proj.checkout':
    'Checkout propietario de alta conversión, con +R$ 22,5M (€3,6M) procesados y seguridad transaccional.',
  'badge.internal': 'Sistema interno',
  'proj.postal':
    'Migración del frontend de Angular 4 a Angular 19. Sistema de gestión de pre-envío y servicios de Correios (correo brasileño), para agencias franquiciadas.',
  'proj.foto.t': 'Sitio de Fotografía',
  'proj.foto':
    'Sitio profesional creado para una clienta, con identidad visual, galería de portafolio y páginas de servicios. Versión web, diseñada con enfoque mobile-first.',
  'proj.coletas':
    'Aplicación para optimizar las operaciones internas de recolección de objetos en las agencias de Correios (correo brasileño), permitiendo el seguimiento de ruta en tiempo real, el registro de baja de ítems y la baja rápida en listas de envío mediante lectura de código QR.',
  'proj.coletas.alt': 'Pantalla de la app Portal Postal Coletas',
  'badge.store': 'Publicado en Play Store',
  'proj.postalapp':
    'App interna para franquiciados de Correios (correo brasileño) con <b>+5 mil descargas</b> en la Play Store, centrada en la gestión de recolecciones, cotización de plazos/tarifas y seguimiento de envíos.',
  'proj.postalapp.alt': 'Pantalla de la app Portal Postal',
  'conq.podcast.t': 'Podcast Gloss Express',
  'conq.podcast':
    'Participación con el equipo en el Podcast Gloss Express Brasil, hablando sobre la ingeniería del proyecto, las dificultades y la superación hasta la entrega.',
  'conq.podcast.link': 'Ver en YouTube',
  'conq.podcast.alt': 'Grabación del Podcast Gloss Express Brasil con el equipo',
  'conq.instrutor.t': 'Instructor de Introducción a la Programación',
  'conq.instrutor':
    'En 2024, impartió el Curso de Introducción a la Programación en el Tribunal de Justicia de Roraima, con mentoría a profesionales no técnicos.',
  'conq.instrutor.badge': 'Enseñanza y mentoría',
  'conq.instrutor.alt': 'Antonino impartiendo el curso de introducción a la programación',
  'conq.premio.t': '1.º lugar — Premio de Innovación 2023',
  'conq.premio':
    'Victoria en equipo con el proyecto AutomaJus (RPA) en el Tribunal de Justicia de Roraima. Primer lugar en la categoría “Ideas Estructuradas” y primer lugar en la categoría General en el Proyecto de Innovación de 2023.',
  'conq.premio.badge': '1.º lugar',
  'conq.premio.link': 'artículo en el TJRR',
  'conq.premio.alt': 'Equipo recibiendo el trofeo del Premio de Innovación 2023',
  'sec.experiencias': 'Experiencia',
  'xp.gloss.p': 'Jul 2025 – Presente',
  'xp.gloss.d':
    'Diseñó soluciones Full Stack escalables, el checkout propietario (+R$ 22,5M) y la plataforma Mapa de Salões (+15 mil profesionales).',
  'xp.scc4.p': 'Feb 2025 – Jul 2025',
  'xp.scc4.d':
    'Diseñó las APIs Java del Portal Postal, integró la API Correios Coletas y publicó la app Flutter en la Play Store.',
  'xp.tools.p': 'Nov 2024 – Feb 2025',
  'xp.tools.org': 'ToolsData · Florianópolis, SC · Remoto',
  'xp.tools.d':
    'Desarrolló APIs REST en Java 17 y Jakarta EE, con endpoints de un motor de crédito para decisiones automatizadas.',
  'xp.sondarpa.p': 'Ene 2024 – Sep 2024',
  'xp.sondarpa.d':
    'Lideró equipos de automatización RPA y mentoría técnica; obtuvo el 1.º lugar en el Premio de Innovación del TJRR.',
  'xp.sondarpa.stack': 'UiPath · RPA · Python/Selenium · Scrum · Kanban · Monday · Liderazgo técnico',
  'xp.sondajava.p': 'Mar 2020 – Dic 2023',
  'xp.sondajava.d':
    'Desarrolló APIs RESTful en Java e integraciones RPA; la iniciativa de automatización benefició a +400 familias en Roraima.',
  'xp.brain.p': 'Oct 2020 – Abr 2022',
  'xp.brain.org': 'Brain Xcode · Curitiba, PR · Freelance, remoto',
  'xp.brain.d':
    'Desarrolló aplicaciones en Flutter/Dart con Clean Architecture, principios SOLID y pruebas automatizadas.',
  'xp.suporte.p': 'Dic 2018 – Mar 2020',
  'xp.suporte.d':
    'Soporte técnico avanzado en hardware, redes y sistemas corporativos, con administración de redes y asistencia remota.',
  'xp.suporte.stack': 'Redes · Hardware · Soporte técnico',
  'xp.pref.p': 'Nov 2017 – Feb 2018',
  'xp.pref.org': 'Ayuntamiento de Boa Vista · Boa Vista, RR',
  'xp.pref.d': 'Participó en la implantación del Sistema de Gestión Hospitalaria y en la administración de bases de datos.',
  'xp.pref.stack': 'SQL · Bases de datos · Sistema hospitalario',
  'sec.formacao': 'Formación',
  'form.academica': 'Académica',
  'form.pos': 'Posgrado — Desarrollo de Aplicaciones Móviles',
  'form.grad': 'Grado — Análisis y Desarrollo de Sistemas',
  'form.certificacoes': 'Certificaciones',
  'form.cursos': 'Cursos',
  'cert.arch.alt': 'Insignia Oracle Certified — Oracle Cloud Infrastructure Architect Associate',
  'cert.found.alt': 'Insignia Oracle Certified — Oracle Cloud Infrastructure Foundations Associate',
  'foot.topo': 'Arriba ↑',
};
