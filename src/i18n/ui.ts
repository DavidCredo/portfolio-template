import { Language } from '../../constants';

export const defaultLang = Language.EN;

export const showDefaultLang = false;

export const ui: Record<Language, Record<string, string>> = {
    [Language.EN]: {
        'nav.projects': 'Portfolio',
        'nav.about': 'About me',
        'nav.cta': 'Text me!',
        'nav.open': 'Open navigation',
        'nav.close': 'Close navigation',
        'nav.language.help': 'Choose your language',

        'footer.imprint': 'Imprint',
        'footer.privacy': 'Privacy',

        'imprint.title': 'Imprint',
        'privacy.title': 'Privacy Policy',

        'home.cta.primary': 'My work',
        'home.cta.secondary': 'About me',

        'about.title': 'About me',
        'about.section.abstract': 'Who I am',
        'about.section.skills': 'My skills',
        'about.section.timeline': 'My milestones',

        'timeline.timespan': 'until',
        'timeline.current': 'Today',

        'projects.title': 'Projects',
        'projects.subtitle': 'A selection of projects that I am particularly proud of.',
        'projects.meta': 'Interesting portfolio',
        'projects.duration': 'Duration',
        'projects.team': 'Team',
        'projects.skills': 'Skills',
        'projects.filter': 'Filter by tags',

        'srcButton.github': 'View on GitHub',
        'srcButton.live': 'Visit live demo',
        'srcButton.document': 'Load full document',
    },
    [Language.DE]: {
        'nav.projects': 'Portfolio',
        'nav.about': 'Über mich',
        'nav.cta': 'Schreib mir!',
        'nav.open': 'Navigation öffnen',
        'nav.close': 'Navigation schließen',
        'nav.language.help': 'Wähle deine Sprache',

        'footer.imprint': 'Impressum',
        'footer.privacy': 'Datenschutz',

        'imprint.title': 'Impressum',
        'privacy.title': 'Datenschutzerklärung',

        'home.cta.primary': 'Meine Arbeiten',
        'home.cta.secondary': 'Über mich',

        'about.title': 'Über mich',
        'about.section.abstract': 'Wer ich bin',
        'about.section.skills': 'Meine Stärken',
        'about.section.timeline': 'Meine Stationen',

        'timeline.timespan': 'bis',
        'timeline.current': 'Heute',

        'projects.title': 'Projekte',
        'projects.subtitle': 'Eine Auswahl von Projekten, auf die ich besonders stolz bin.',
        'projects.meta': 'Interessantes Portfolio',
        'projects.duration': 'Kapazität',
        'projects.team': 'Team',
        'projects.skills': 'Fähigkeiten',
        'projects.filter': "Nach Tags filtern",

        'srcButton.github': 'Zum GitHub Repository',
        'srcButton.live': 'Zur Live-Version',
        'srcButton.document': 'Zum ausführlichen Dokument',
    },
} as const;