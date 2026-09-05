import {
  Activity,
  BarChart2,
  ChartColumn,
  CheckSquare,
  CreditCard,
  Database,
  LayoutDashboard,
  Mail,
  Monitor,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceIconName } from '../data/services'

const ICONS: Record<ServiceIconName, LucideIcon> = {
  Users,
  Database,
  CreditCard,
  CheckSquare,
  BarChart2,
  Mail,
  LayoutDashboard,
  Activity,
  Monitor,
  ChartColumn,
}

type Props = {
  name: ServiceIconName
  className?: string
}

export function ServiceIcon({ name, className }: Props) {
  const Icon = ICONS[name]
  return <Icon className={className} size={26} strokeWidth={1.75} aria-hidden />
}
