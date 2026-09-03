export type ServiceIcon =
  | 'crm'
  | 'erp'
  | 'stats'
  | 'billing'
  | 'portal'
  | 'jira'
  | 'reports'
  | 'monitor'
  | 'realtime'
  | 'mail'

export type HubService = {
  id: string
  slug: string
  title: string
  url: string
  description: string
  icon: ServiceIcon
  embeddable: boolean
  sort: number
}

/** Все ссылки из исходного списка пользователя */
export const services: HubService[] = [
  {
    id: 'erp-login',
    slug: 'erp',
    title: 'ERP',
    url: 'http://erp.awg.lan/login.php',
    description: 'Вход в ERP AWG — учёт, склады, операции.',
    icon: 'erp',
    embeddable: true,
    sort: 1,
  },
  {
    id: 'erp-stats',
    slug: 'erp-stats',
    title: 'StatisticWeb',
    url: 'http://erp.awg.lan/StatisticWeb/main.php',
    description: 'Статистика ERP (StatisticWeb).',
    icon: 'stats',
    embeddable: true,
    sort: 2,
  },
  {
    id: 'jira',
    slug: 'jira',
    title: 'Jira',
    url: 'https://it.sola.uz/jira/secure/Dashboard.jspa',
    description: 'Jira Dashboard — задачи и IT-заявки.',
    icon: 'jira',
    embeddable: false,
    sort: 3,
  },
  {
    id: 'portal-2022',
    slug: 'portal-2022',
    title: 'Portal 2022',
    url: 'http://portal-2022.sola.uz/dashboard',
    description: 'Клиентский портал 2022 — dashboard.',
    icon: 'portal',
    embeddable: true,
    sort: 4,
  },
  {
    id: 'portal-2027',
    slug: 'portal-2027',
    title: 'Portal 2027',
    url: 'https://portal-2027.sola.uz',
    description: 'Клиентский портал 2027.',
    icon: 'portal',
    embeddable: false,
    sort: 5,
  },
  {
    id: 'rep',
    slug: 'reports',
    title: 'Отчёты',
    url: 'http://rep.awg.lan',
    description: 'Внутренние отчёты AWG (rep.awg.lan).',
    icon: 'reports',
    embeddable: true,
    sort: 6,
  },
  {
    id: 'amocrm',
    slug: 'crm',
    title: 'CRM',
    url: 'https://solauzbekistan.amocrm.ru',
    description:
      'amoCRM — клиенты, сделки, история взаимодействий.',
    icon: 'crm',
    embeddable: false,
    sort: 7,
  },
  {
    id: 'monitor-241',
    slug: 'monitor-241',
    title: '172.18.0.241',
    url: 'https://172.18.0.241',
    description: 'Сервис мониторинга https://172.18.0.241',
    icon: 'monitor',
    embeddable: false,
    sort: 8,
  },
  {
    id: 'realtime',
    slug: 'realtime',
    title: 'Real-time',
    url: 'http://172.18.0.17/real-time/index',
    description: 'Real-time панель (172.18.0.17).',
    icon: 'realtime',
    embeddable: true,
    sort: 9,
  },
  {
    id: 'dealer',
    slug: 'dealer',
    title: 'Dealer',
    url: 'https://dealer.sola.uz/login.php',
    description: 'Дилерский кабинет (dealer.sola.uz).',
    icon: 'billing',
    embeddable: false,
    sort: 10,
  },
  {
    id: 'mail',
    slug: 'mail',
    title: 'Почта',
    url: 'https://mail.sola.uz',
    description: 'Корпоративная почта mail.sola.uz',
    icon: 'mail',
    embeddable: false,
    sort: 11,
  },
]

export function getSortedServices(): HubService[] {
  return [...services].sort((a, b) => a.sort - b.sort)
}

export function getServiceBySlug(slug: string): HubService | undefined {
  return services.find((s) => s.slug === slug)
}

export const defaultService = services[0]!
