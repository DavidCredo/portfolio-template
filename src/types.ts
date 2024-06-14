export interface TimelineData {
    id: number;
    title: string;
    location: string;
    description: string;
    dateStart: Date;
    dateEnd: Date | undefined;
    type: IconType;
}

export enum IconType {
    Work = "Work",
    Education = "Education",
    Volunteer = "Volunteer",
    Certification = "Certification",
    Other = "Other",
}