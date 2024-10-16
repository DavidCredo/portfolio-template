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

const categoryColorMap: Record<Category, Color> = {
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

export const availableTags: { name: string; color: Color }[] = [
    { name: "Mixed Reality", color: categoryColorMap[Category.Platform] },
    { name: "Web Development", color: categoryColorMap[Category.ProgrammingLanguage] },
    { name: "Interaktionsdesign", color: categoryColorMap[Category.Interface] },
    { name: "WebSockets", color: categoryColorMap[Category.ServerNetwork] },
    { name: "Docker", color: categoryColorMap[Category.ServerNetwork] },
    { name: "User Experience", color: categoryColorMap[Category.Interface] },
    { name: "Frontend Development", color: categoryColorMap[Category.Interface] },
    { name: "Swift", color: categoryColorMap[Category.ProgrammingLanguage] },
    { name: "SwiftUI", color: categoryColorMap[Category.ProgrammingLanguage] },
    { name: "Augmented Reality", color: categoryColorMap[Category.Platform] },
    { name: "Flutter", color: categoryColorMap[Category.ProgrammingLanguage] },
    { name: "Augmented Reality", color: categoryColorMap[Category.Platform] },
    { name: "Real Time Database", color: categoryColorMap[Category.ServerNetwork] },
    { name: "Unity", color: categoryColorMap[Category.Platform] },
    { name: "C#", color: categoryColorMap[Category.ProgrammingLanguage] },
    { name: "Elektrotechnik", color: categoryColorMap[Category.Engineering] },
    { name: "Game Design", color: categoryColorMap[Category.Miscellaneous] },
  ];
