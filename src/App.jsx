import { useMemo, useState } from 'react';

const content = {
  de: {
    brand: 'Robin Görlach',
    languageLabel: 'Sprache',
    nav: [
      { href: '#top', label: 'HOME' },
      { href: '#about', label: 'ÜBER MICH' },
      { href: '#software', label: 'SOFTWARE' },
      { href: '#linux', label: 'LINUX' },
      { href: '#projects', label: 'PROJEKTE' },
      { href: '#contact', label: 'KONTAKT' },
    ],
    heroBadge: 'Portfolio · Softwareentwicklung · Linux',
    heroTitle: 'Hallo, ich bin Robin Görlach',
    heroText:
      'Leidenschaftlicher Anwendungsentwickler mit über 30 Jahren Erfahrung in der IT. Mein Fokus liegt auf wartbarer Software, stabilen Linux-Systemen und Open-Source-Technologien.',
    heroPrimary: 'Mehr über mich',
    heroSecondary: 'vCard herunterladen',
    heroFactsTitle: 'Kurzprofil',
    heroFacts: [
      'Softwareentwicklung für robuste und verständliche Anwendungen',
      'Linux-Administration mit Blick auf Sicherheit und Betrieb',
      'Interesse an Open Source, Wartbarkeit und sauberer Architektur',
    ],
    aboutTitle: 'Über mich',
    aboutIntro:
      'Mit über drei Jahrzehnten Erfahrung in der IT biete ich ein breites Spektrum an Fachwissen in Analyse, Entwicklung, Test und Betrieb komplexer Anwendungen. Mich interessieren Lösungen, die nicht nur technisch funktionieren, sondern im Alltag wirklich tragfähig sind.',
    aboutCards: [
      {
        title: 'Enterprise',
        text: 'Wartbarkeit, Skalierbarkeit und Lesbarkeit des Codes sind für mich zentrale Anforderungen professioneller Software.',
      },
      {
        title: 'Rich Internet',
        text: 'Moderne Web-Anwendungen sollen den Komfort nativer Anwendungen mit der Flexibilität des Webs verbinden.',
      },
      {
        title: 'Agile',
        text: 'Agile Arbeitsweisen helfen dabei, Anforderungen sichtbar zu machen und Projekte iterativ und zielgerichtet voranzubringen.',
      },
      {
        title: 'Open Source',
        text: 'Offene Technologien stehen für Transparenz, Zusammenarbeit und langfristige Wartbarkeit – Werte, die mir wichtig sind.',
      },
    ],
    softwareTitle: 'Softwareentwicklung',
    softwareIntro:
      'Die IT-Welt entwickelt sich ständig weiter. Ich arbeite gern an Lösungen, die kreativ, nachhaltig und verständlich aufgebaut sind. Besonders wichtig ist mir eine klare Struktur zwischen Oberfläche, Fachlogik und Betrieb.',
    softwareAreas: [
      {
        title: 'Webentwicklung',
        text: 'HTML, CSS, JavaScript und React nutze ich für leistungsfähige und gut bedienbare Oberflächen. Tailwind CSS hilft dabei, Designs effizient und konsistent umzusetzen.',
      },
      {
        title: 'Backend-Entwicklung',
        text: 'Mit Node.js, Express und Datenbanken wie MySQL oder MongoDB lassen sich zuverlässige Backend-Strukturen für skalierbare Anwendungen aufbauen.',
      },
      {
        title: 'Softwarearchitektur',
        text: 'Ich beschäftige mich intensiv mit stabilen, wartbaren Anwendungen und der Integration von Software in bestehende IT-Umgebungen.',
      },
    ],
    techTitle: 'Technologien',
    techList: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MySQL',
      'MongoDB',
      'Linux',
      'Open Source',
    ],
    linuxTitle: 'Linux-Administration',
    linuxIntro:
      'Mit jahrelanger Erfahrung in Installation, Verwaltung und Optimierung Linux-basierter Umgebungen konzentriere ich mich auf zwei Dinge: verlässlichen Betrieb und sinnvolle Absicherung.',
    linuxTopics: [
      {
        title: 'Installation und Betrieb von Linux-Netzen',
        text: 'Vom Aufbau neuer Serverstrukturen bis zur Pflege bestehender Umgebungen stehen Stabilität, Nachvollziehbarkeit und Anpassungsfähigkeit im Mittelpunkt.',
      },
      {
        title: 'Cybersecurity',
        text: 'Sicherheit ist für mich keine Nebensache. Härtung, Zugriffskontrollen, Überwachung und robuste Prozesse gehören für mich zusammen.',
      },
    ],
    projectsTitle: 'Projekte',
    projectsIntro: 'Eine kleine Auswahl eigener Projekte und technischer Arbeiten.',
    projects: [
      {
        title: 'Azei',
        description:
          'Ein Plugin für Azureus, das die Steuerung per E-Mail und Schlüsselwörtern ermöglicht. Entwickelt in Java.',
        href: 'https://github.com/sonata82/Azei',
        cta: 'Quellcode',
      },
      {
        title: 'ShopShopViewer',
        description:
          'Eine Android-Anwendung zum Anzeigen von ShopShop-Dateien. Entwickelt in Java für Android mit Nutzung der Dropbox-API.',
        href: 'https://github.com/sonata82/ShopShopViewer',
        cta: 'Quellcode',
      },
    ],
    motivationTitle: 'Persönliche Motivation und Werte',
    motivationParagraphs: [
      'Die Welt der IT begeistert mich seit Jahrzehnten. Für mich bedeutet sie nicht nur technisches Arbeiten, sondern die Chance, komplexe Herausforderungen in nützliche und nachhaltige Lösungen zu verwandeln.',
      'Als Entwickler und Administrator ist es mir wichtig, nicht nur Anforderungen umzusetzen, sondern auch Zusammenarbeit, Wissenstransfer und langfristige Qualität zu fördern.',
      'Open Source, Sicherheit, Wartbarkeit und eine saubere technische Basis sind für mich keine Extras, sondern Teil einer professionellen Arbeitsweise.',
    ],
    journeyTitle: 'Berufliche Reise und Interessen',
    journeyParagraphs: [
      'Meine Reise in der IT begann vor über drei Jahrzehnten. Seitdem habe ich sehr unterschiedliche Technologien, Projekte und Systemlandschaften kennengelernt und schätzen gelernt, wie wichtig robuste Grundlagen sind.',
      'Mein technologischer Fokus liegt auf Linux-Administration sowie der Entwicklung stabiler Anwendungen. Sprachen wie C#, Java und C++ gehören ebenso dazu wie Datenbankarbeit und moderne Web-Technologien.',
      'Gleichzeitig lerne ich kontinuierlich weiter, denn Software ist nie endgültig fertig. Refactoring, Klarheit und technische Weiterentwicklung gehören für mich zum Alltag.',
    ],
    contactTitle: 'Kontakt',
    contactText:
      'Wenn Sie Kontakt aufnehmen möchten oder Unterstützung in Softwareentwicklung, Linux-Administration oder technischen Konzepten suchen, freue ich mich über eine Nachricht.',
    contactCards: [
      'E-Mail: info@rgo.me.uk',
      'Standort: Kleve, Deutschland',
      'Schwerpunkte: Softwareentwicklung, Linux, Open Source',
    ],
    contactAction: 'E-Mail schreiben',
    footer: '© 2026 Robin Görlach',
  },
  en: {
    brand: 'Robin Görlach',
    languageLabel: 'Language',
    nav: [
      { href: '#top', label: 'HOME' },
      { href: '#about', label: 'ABOUT' },
      { href: '#software', label: 'SOFTWARE' },
      { href: '#linux', label: 'LINUX' },
      { href: '#projects', label: 'PROJECTS' },
      { href: '#contact', label: 'CONTACT' },
    ],
    heroBadge: 'Portfolio · Software Engineering · Linux',
    heroTitle: "Hello, I'm Robin Görlach",
    heroText:
      'Passionate application developer with more than 30 years of experience in IT. My focus is on maintainable software, stable Linux systems, and open-source technologies.',
    heroPrimary: 'Learn more',
    heroSecondary: 'Download vCard',
    heroFactsTitle: 'Quick profile',
    heroFacts: [
      'Software engineering for robust and understandable applications',
      'Linux administration with a focus on security and operations',
      'Strong interest in open source, maintainability, and clean architecture',
    ],
    aboutTitle: 'About me',
    aboutIntro:
      'With more than three decades of experience in IT, I offer broad expertise in analysis, development, testing, and operation of complex applications. I value solutions that are not only technically correct but also sustainable in everyday use.',
    aboutCards: [
      {
        title: 'Enterprise',
        text: 'Maintainability, scalability, and readability are core requirements of professional software development.',
      },
      {
        title: 'Rich Internet',
        text: 'Modern web applications should combine the comfort of native software with the flexibility of the web.',
      },
      {
        title: 'Agile',
        text: 'Agile ways of working help to make requirements visible and move projects forward iteratively and effectively.',
      },
      {
        title: 'Open Source',
        text: 'Open technologies stand for transparency, collaboration, and long-term maintainability — values I strongly support.',
      },
    ],
    softwareTitle: 'Software engineering',
    softwareIntro:
      'The IT world keeps evolving. I enjoy building solutions that are creative, sustainable, and clearly structured. Separating interface, business logic, and operations is especially important to me.',
    softwareAreas: [
      {
        title: 'Web development',
        text: 'I use HTML, CSS, JavaScript, and React for powerful and user-friendly interfaces. Tailwind CSS helps me implement designs efficiently and consistently.',
      },
      {
        title: 'Backend development',
        text: 'Node.js, Express, and databases such as MySQL or MongoDB provide a strong basis for reliable and scalable backend systems.',
      },
      {
        title: 'Software architecture',
        text: 'I care deeply about stable, maintainable applications and the integration of software into existing IT environments.',
      },
    ],
    techTitle: 'Technologies',
    techList: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MySQL',
      'MongoDB',
      'Linux',
      'Open Source',
    ],
    linuxTitle: 'Linux administration',
    linuxIntro:
      'With years of experience in installing, running, and optimizing Linux-based environments, I focus on two things: reliable operations and sensible security.',
    linuxTopics: [
      {
        title: 'Installation and operation of Linux networks',
        text: 'From building new server structures to maintaining existing environments, stability, transparency, and adaptability are key.',
      },
      {
        title: 'Cybersecurity',
        text: 'Security is never an afterthought. Hardening, access control, monitoring, and robust processes belong together.',
      },
    ],
    projectsTitle: 'Projects',
    projectsIntro: 'A small selection of personal projects and technical work.',
    projects: [
      {
        title: 'Azei',
        description:
          'A plugin for Azureus that enables control through email and keywords. Built in Java.',
        href: 'https://github.com/sonata82/Azei',
        cta: 'Source code',
      },
      {
        title: 'ShopShopViewer',
        description:
          'An Android application for displaying ShopShop files. Built in Java for Android and using the Dropbox API.',
        href: 'https://github.com/sonata82/ShopShopViewer',
        cta: 'Source code',
      },
    ],
    motivationTitle: 'Motivation and values',
    motivationParagraphs: [
      'The world of IT has fascinated me for decades. For me, it is not just technical work, but a chance to transform complex challenges into useful and sustainable solutions.',
      'As a developer and administrator, I want not only to implement requirements, but also to support collaboration, knowledge sharing, and long-term quality.',
      'Open source, security, maintainability, and a clean technical foundation are not extras to me — they are part of professional work.',
    ],
    journeyTitle: 'Career journey and interests',
    journeyParagraphs: [
      'My journey in IT began more than three decades ago. Since then, I have worked with a wide range of technologies, projects, and system landscapes, which taught me the value of robust foundations.',
      'My technological focus lies in Linux administration and the development of stable applications. Languages such as C#, Java, and C++ are part of that, along with database work and modern web technologies.',
      'At the same time, I keep learning continuously, because software is never truly finished. Refactoring, clarity, and technical growth are part of everyday practice for me.',
    ],
    contactTitle: 'Contact',
    contactText:
      'If you would like to get in touch or are looking for support in software engineering, Linux administration, or technical concepts, I would be happy to hear from you.',
    contactCards: [
      'Email: info@rgo.me.uk',
      'Location: Kleve, Germany',
      'Focus: software engineering, Linux, open source',
    ],
    contactAction: 'Send email',
    footer: '© 2026 Robin Görlach',
  },
};

function Section({ id, title, intro, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 md:p-8"
    >
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
        {intro ? <p className="mt-4 leading-8 text-slate-600">{intro}</p> : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function App() {
  const [language, setLanguage] = useState('de');
  const t = useMemo(() => content[language], [language]);
  const vCardUrl = `${import.meta.env.BASE_URL}vCard.vcf`;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800" id="top">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">{t.heroBadge}</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{t.brand}</p>
          </div>

          <nav className="hidden flex-wrap items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-sky-700">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-500 sm:inline">{t.languageLabel}</span>
            <div className="inline-flex rounded-full border border-slate-300 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setLanguage('de')}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  language === 'de' ? 'bg-sky-700 text-white' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  language === 'en' ? 'bg-sky-700 text-white' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:px-6 md:py-12">
        <section className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 px-6 py-8 text-white shadow-xl shadow-sky-950/20 md:grid-cols-[1.4fr_0.9fr] md:px-10 md:py-12">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">{t.heroBadge}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-50/90">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#about" className="rounded-full bg-white px-5 py-3 font-medium text-slate-900 transition hover:-translate-y-0.5">
                {t.heroPrimary}
              </a>
              <a href={vCardUrl} className="rounded-full border border-white/25 px-5 py-3 font-medium text-white transition hover:bg-white/10">
                {t.heroSecondary}
              </a>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/15 text-xl font-semibold">
                RG
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-sky-200">{t.heroFactsTitle}</p>
                <p className="mt-1 text-lg font-medium text-white">{t.brand}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-sky-50/90">
              {t.heroFacts.map((fact) => (
                <li key={fact} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                  {fact}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <Section id="about" title={t.aboutTitle} intro={t.aboutIntro}>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.aboutCards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="software" title={t.softwareTitle} intro={t.softwareIntro}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4">
              {t.softwareAreas.map((area) => (
                <article key={area.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
                </article>
              ))}
            </div>
            <aside className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">{t.techTitle}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.techList.map((item) => (
                  <span key={item} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </Section>

        <Section id="linux" title={t.linuxTitle} intro={t.linuxIntro}>
          <div className="grid gap-4 md:grid-cols-2">
            {t.linuxTopics.map((topic) => (
              <article key={topic.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{topic.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title={t.projectsTitle} intro={t.projectsIntro}>
          <div className="grid gap-4 md:grid-cols-2">
            {t.projects.map((project) => (
              <article key={project.title} className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 font-semibold text-sky-800">
                  {project.title.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{project.description}</p>
                <a
                  href={project.href}
                  className="mt-5 inline-flex w-fit rounded-full bg-sky-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.cta}
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section id="motivation" title={t.motivationTitle}>
          <div className="grid gap-4">
            {t.motivationParagraphs.map((paragraph) => (
              <p key={paragraph} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section id="journey" title={t.journeyTitle}>
          <div className="grid gap-4">
            {t.journeyParagraphs.map((paragraph) => (
              <p key={paragraph} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 leading-8 text-slate-600 shadow-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section id="contact" title={t.contactTitle} intro={t.contactText}>
          <div className="grid gap-4 md:grid-cols-3">
            {t.contactCards.map((card) => (
              <div key={card} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 leading-7 text-slate-700">
                {card}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="mailto:info@rgo.me.uk" className="inline-flex rounded-full bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800">
              {t.contactAction}
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <span>{t.footer}</span>
          <div className="flex flex-wrap gap-4">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-sky-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
