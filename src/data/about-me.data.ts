import { AboutMeModel } from "src/model/about-me.model";
import { faFacebook, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";

export const AbouteMeData: AboutMeModel = {
  name: "Max Franco",
  occupationName: 'Web Developer',
  description: `
  Graduado em Analista e Desenvolvimento de Sistemas.
  Desenvolvedor C# com experiência nas seguintes linguagens e
  ferramentas como: NodeJS, PHP (Laravel), Git, VueJS, Angular,
  Banco de dados Relacional e Não Relacional, Wordpress, Git,
  Amazon AWS, e experiência em ambiente Linux e Windows.
  `,
  social: [
    { icon: faLinkedin, name: "Linkedin", value: "/maxcodefranco", link: "https://www.linkedin.com/in/maxcodefranco" },
    { icon: faGithub, name: "Github",   value: "/maxcodefranco", link: "https://github.com/maxcodefranco" },
    { icon: faFacebook, name: "Facebook", value: "/maxcodefranco", link: "https://www.facebook.com/maxcodefranco" }
  ],
  skills: [
    { name: "C#" },
    { name: "SQL Server" },
    { name: "PHP" },
    { name: "Javascript" },
    { name: "Angular" },
  ],
  contact: {
    iconLocation: faMapMarker,
    iconWhatsapp: faWhatsapp,
    iconMail: faEnvelope,
    email: "maxcodefranco@gmail.com",
    city: "São Paulo",
    state: "SP",
    whatsapp: "11 94909 8306"
  }
}
