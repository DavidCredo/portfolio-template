export enum Color {
    Blue = 'blue',
    Orange = 'orange',
    Yellow = 'yellow',
    Amber = 'amber',
    Green = 'green',
    Emerald = 'emerald',
    Violet = 'violet',
    Cyan = 'cyan',
    Rose = 'rose',
    Purple = 'purple',
    Red = 'red',
    Pink = 'pink',
}

export const availableTags: { name: string; color: Color }[] = [
    { name: "Mixed Reality", color: Color.Emerald },
    { name: "Web Development", color: Color.Blue },
    { name: "Interaction Design", color: Color.Violet },
    { name: "User Experience", color: Color.Orange },
    { name: "Frontend Development", color: Color.Amber },
    { name: "User Interface", color: Color.Yellow },
    { name: "Backend Development", color: Color.Green },
    { name: "Databases", color: Color.Cyan },
    { name: "Project Management", color: Color.Rose },
    { name: "Agile", color: Color.Purple },
    { name: "Leadership", color: Color.Red },
    { name: "Software Architecture", color: Color.Pink },
  ];