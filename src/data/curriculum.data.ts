import { CurriculumModel } from "src/model/curriculum.model";
import { AbouteMeData } from "./about-me.data";
import { AcademicData } from "./academic.data";
import { JobData } from "./job.data";
import { ProfessionalXpData } from "./professional-xp.data";

export const CurriculumData: CurriculumModel = {
  aboutMe: AbouteMeData,
  academic: AcademicData,
  professionalXp: ProfessionalXpData,
  jobs: JobData
}
