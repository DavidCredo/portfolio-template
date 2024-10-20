export enum Color {
    Blue = 'blue',
    Green = 'green',
    Amber = 'amber',
    Yellow = 'yellow',
    Emerald = 'emerald',
    Orange = 'orange',
    Violet = 'violet',
    Cyan = 'cyan',
    Rose = 'rose',
    Pink = 'pink',
    Red = 'red',
    Purple = 'purple',
}

export enum Category {
    Interface,
    Communication,
    Management,
    Science,
    Engineering,
    ServerNetwork,
    Platform,
    ProgrammingLanguage,
    Miscellaneous,
}

export enum Language {
    EN = 'en',
    DE = 'de',
}

export const languages : Record<Language, string> = {
    [Language.EN]: '🇬🇧 En',
    [Language.DE]: '🇩🇪 De',
};

export const categoryColorMap: Record<Category, Color> = {
    [Category.Interface]: Color.Green,
    [Category.Communication]: Color.Blue,
    [Category.Management]: Color.Cyan,
    [Category.Science]: Color.Orange,
    [Category.Engineering]: Color.Yellow,
    [Category.ServerNetwork]: Color.Purple,
    [Category.Platform]: Color.Red,
    [Category.ProgrammingLanguage]: Color.Pink,
    [Category.Miscellaneous]: Color.Amber,
};