import { ProfessionalXpModel } from "src/model/professional-xp.model";

export const ProfessionalXpData: ProfessionalXpModel[] = [
  {
    companyName: "Hyperativa",
    activityDescription: "Desenvolvimento Backend nas promoções e campanhas do Programa Vai de Visa.",
    occupationArea: "Programador Back End",
    startedAt: new Date(Date.parse('2021-01-01 00:00:00')),
    endedAt: new Date(Date.parse('2021-03-01 00:00:00')),
    website: 'https://hyperativa.com.br/'
  },
  {
    companyName: "Laboratório Lapec",
    activityDescription: "Empresa com cerca de 90-100 funcionários, certificado padrão ISO9001. Gestão de marketing inbound e outbound. Desenvolvimento de planilhas e ferramentas de apoio à decisão. Desenvolvimento do site com integração ao Banco de Dados do ERP do laboratório.",
    occupationArea: "Web Designer",
    startedAt: new Date(Date.parse('2018-01-01 00:00:00')),
    endedAt: new Date(Date.parse('2019-02-01 00:00:00')),
    location: 'Jacobina/BA',
    website: 'https://lapec.com.br'
  },
  {
    companyName: "Unopar",
    activityDescription: "Supervisão e mantenimento das estruturas para as aulas. Desenvolvimento de conteúdo para redes sociais.",
    occupationArea: "Estagiário em TI",
    startedAt: new Date(Date.parse('2017-11-01 00:00:00')),
    endedAt: new Date(Date.parse('2018-02-01 00:00:00')),
    location: 'Jacobina/BA',
    website: 'https://www.unopar.com.br/unidade/jacobinaba-i3994u/'
  }
];
