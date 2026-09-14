export type ServiceIconName =
  | 'Users'
  | 'Database'
  | 'CreditCard'
  | 'CheckSquare'
  | 'BarChart2'
  | 'Mail'
  | 'LayoutDashboard'
  | 'Activity'
  | 'Monitor'
  | 'ChartColumn'

export interface Service {
  id: string
  title: string
  url: string
  description: string
  embeddable: boolean
  sort: number
  icon: ServiceIconName
}

export const SERVICES: Service[] = [
  {
    id: 'amocrm',
    title: 'CRM',
    url: 'https://solauzbekistan.amocrm.ru',
    description: 'amoCRM — база клиентов и сделки',
    embeddable: false,
    sort: 1,
    icon: 'Users',
  },
  {
    id: 'erp-login',
    title: 'ERP',
    url: 'http://erp.awg.lan/login.php',
    description: 'Вход во внутреннюю ERP-систему',
    embeddable: true,
    sort: 2,
    icon: 'Database',
  },
  {
    id: 'erp-stat',
    title: 'Статистика ERP',
    url: 'http://erp.awg.lan/StatisticWeb/main.php',
    description: 'Статистические показатели по ERP',
    embeddable: true,
    sort: 3,
    icon: 'ChartColumn',
  },
  {
    id: 'dealer',
    title: 'Дилеры',
    url: 'https://dealer.sola.uz/login.php',
    description: 'Кабинет дилеров',
    embeddable: false,
    sort: 4,
    icon: 'CreditCard',
  },
  {
    id: 'portal-2027',
    title: 'Sola Premium',
    url: 'https://portal-2027.sola.uz/dashboard/daily-stats',
    description: 'Sola Premium — статистика',
    embeddable: false,
    sort: 5,
    icon: 'LayoutDashboard',
  },
  {
    id: 'jira-main',
    title: 'Jira',
    url: 'https://it.sola.uz/jira/secure/Dashboard.jspa',
    description: 'Управление задачами и проектами',
    embeddable: false,
    sort: 6,
    icon: 'CheckSquare',
  },
  {
    id: 'rep-awg',
    title: 'Отчёты',
    url: 'http://rep.awg.lan',
    description: 'Сервер отчётов (rep.awg.lan)',
    embeddable: true,
    sort: 7,
    icon: 'BarChart2',
  },
  {
    id: 'rep-ip1',
    title: 'Отчёты КЦ',
    url: 'https://172.18.0.241',
    description: 'Отчёты колл-центра',
    embeddable: false,
    sort: 8,
    icon: 'Monitor',
  },
  {
    id: 'rep-ip2',
    title: 'Дашборд КЦ',
    url: 'http://172.18.0.17/real-time/index',
    description: 'Дашборд колл-центра',
    embeddable: true,
    sort: 9,
    icon: 'Activity',
  },
  {
    id: 'webmail',
    title: 'Почта',
    url: 'https://mail.sola.uz',
    description: 'Корпоративная электронная почта',
    embeddable: false,
    sort: 10,
    icon: 'Mail',
  },
]

export function getSortedServices(): Service[] {
  return [...SERVICES].sort((a, b) => a.sort - b.sort)
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id)
}

export const defaultService = SERVICES[0]!
