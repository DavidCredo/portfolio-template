export enum Color {
    Blue = 'blue',
    Orange = 'orange',
    Yellow = 'yellow',
    Amber = 'amber',
    Green = 'green',
    Emerald = 'emerald',
    Violet = 'violet',
}

export const availableTags: { name: string; color: Color }[] = [
    { name: "Mixed Reality", color: Color.Emerald },
    { name: "Web Development", color: Color.Blue },
    { name: "Interaction Design", color: Color.Violet },
    { name: "User Experience", color: Color.Orange },
    { name: "Frontend Development", color: Color.Amber },
    { name: "User Interface", color: Color.Yellow },
    { name: "Backend Development", color: Color.Green },
  ];