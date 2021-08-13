import { JobModel } from "src/model/job.model";

export const JobData: JobModel[] = [
  {
    title: 'Promoção Visa e Disney+',
    date: new Date(Date.parse('2020 ')),
    description: 'Desenvolvimento do backend, implementando a mecânica da promoção.',
    website: 'https://beneficioslac.visa.com/s/disney'
  },
  {
    title: "Promoção das Galáxias Ourocard Visa",
    date: new Date(Date.parse('2019-09-01 00:00:00')),
    description: 'Promoção da Banco do Brasil em parceria com a Visa onde leva o ganhador do sorteio à Disney. Desenvolvimento back-end do fluxo de cadastro, login e consulta da participação dos clientes na promoção.',
    website: 'https://www.youtube.com/watch?v=_bPSNiK6e8c'
  },
  {
    title: 'Hotsite da campanha Bradesco 10/10 e Next 10/10',
    date: new Date(Date.parse('2019-07-01 00:00:00')),
    description: 'Desenvolvimento Back-End e Front-End do hotsite da campanha do Bradesco em parceria com a visa.',
    website: 'https://promocoes.visa.com.br/site/bradesco/bradesco1010'
  },
  {
    title: 'Hotsite da promoção Tô rindo à toa do Bradescard',
    date: new Date(Date.parse('2019-07-01 00:00:00')),
    description: 'Desenvolvimento de Back-End e Front-End do Hotsite da promoção Tô rindo à toa do BradesCard.',
    website: 'https://promocoes.visa.com.br/site/bradesco/bradescard/home'
  },
  {
    title: 'Promoção Ourocard Visa Agronegócio',
    date: new Date(Date.parse('2019-05-01 00:00:00')),
    description: 'Desenvolvimento do frontend e implementação mecânica da promoção (backend).',
    website: 'https://promocoes.visa.com.br/site/bb/bbagronegocio'
  }
]
