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
    description: 'amoCRM — mijozlar bazasi va bitimlar',
    embeddable: false,
    sort: 1,
    icon: 'Users',
  },
  {
    id: 'erp-login',
    title: 'ERP',
    url: 'http://erp.awg.lan/login.php',
    description: 'Ichki ERP tizimiga kirish',
    embeddable: true,
    sort: 2,
    icon: 'Database',
  },
  {
    id: 'erp-stat',
    title: 'StatisticWeb',
    url: 'http://erp.awg.lan/StatisticWeb/main.php',
    description: "ERP boʻyicha statistik koʻrsatkichlar",
    embeddable: true,
    sort: 3,
    icon: 'ChartColumn',
  },
  {
    id: 'dealer',
    title: 'Dealer',
    url: 'https://dealer.sola.uz/login.php',
    description: 'Dilerlar kabineti',
    embeddable: false,
    sort: 4,
    icon: 'CreditCard',
  },
  {
    id: 'portal-2027',
    title: 'Sola Premium',
    url: 'https://portal-2027.sola.uz',
    description: 'Sola Premium (статистика)',
    embeddable: false,
    sort: 5,
    icon: 'LayoutDashboard',
  },
  {
    id: 'jira-main',
    title: 'Jira',
    url: 'https://it.sola.uz/jira/secure/Dashboard.jspa',
    description: 'Vazifalar va loyihalar boshqaruvi',
    embeddable: false,
    sort: 6,
    icon: 'CheckSquare',
  },
  {
    id: 'rep-awg',
    title: 'Отчёты',
    url: 'http://rep.awg.lan',
    description: 'Hisobotlar serveri (rep.awg.lan)',
    embeddable: true,
    sort: 7,
    icon: 'BarChart2',
  },
  {
    id: 'rep-ip1',
    title: 'CC отчёты',
    url: 'https://172.18.0.241',
    description: 'Call center (отчеты)',
    embeddable: false,
    sort: 8,
    icon: 'Monitor',
  },
  {
    id: 'rep-ip2',
    title: 'CC dashboard',
    url: 'http://172.18.0.17/real-time/index',
    description: 'Call center (dashboard)',
    embeddable: true,
    sort: 9,
    icon: 'Activity',
  },
  {
    id: 'webmail',
    title: 'Почта',
    url: 'https://mail.sola.uz',
    description: 'Korporativ elektron pochta',
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
