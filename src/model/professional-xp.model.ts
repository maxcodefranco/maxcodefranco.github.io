export interface ProfessionalXpModel {
  startedAt: Date;
  endedAt?: Date;
  companyName: string;
  occupationArea: string;
  activityDescription: string;
  isCurrent?: boolean;
  website?: string;
  location?: string;
}
