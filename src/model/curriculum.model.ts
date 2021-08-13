import { AboutMeModel } from "./about-me.model";
import { AcademicModel } from "./academic.model";
import { JobModel } from "./job.model";
import { ProfessionalXpModel } from "./professional-xp.model";

export interface CurriculumModel {
  aboutMe: AboutMeModel;
  professionalXp: ProfessionalXpModel[];
  academic: AcademicModel[];
  jobs: JobModel[];
}
