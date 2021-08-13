import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialModel {
  name: string;
  value: string;
  icon: IconDefinition;
  link?: string;
}

interface Skill {
  name: string;
}

export  interface AboutMeModel {
  name: string;
  occupationName: string;
  description: string;
  social: SocialModel[],
  skills: Skill[],
  contact: {
    iconLocation: IconDefinition,
    iconWhatsapp: IconDefinition,
    iconMail: IconDefinition,
    email: string;
    whatsapp: string;
    city: string;
    state: string;
  }
}
