import type { ServiceIcon } from '../data/services'

type IconProps = {
  name: ServiceIcon
  className?: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ServiceGlyph({ name, className }: IconProps) {
  const common = {
    className,
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'crm':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.25" {...stroke} />
          <path d="M5.5 19.5c1.6-3.2 3.9-4.8 6.5-4.8s4.9 1.6 6.5 4.8" {...stroke} />
        </svg>
      )
    case 'erp':
      return (
        <svg {...common}>
          <path d="M4 19.5V8.2L12 4l8 4.2v11.3" {...stroke} />
          <path d="M9 19.5v-5h6v5" {...stroke} />
          <path d="M9 11h.01M12 11h.01M15 11h.01" {...stroke} />
        </svg>
      )
    case 'stats':
      return (
        <svg {...common}>
          <path d="M5 19.5h14" {...stroke} />
          <path d="M7.5 16.5v-5M12 16.5V7.5M16.5 16.5v-8" {...stroke} />
          <circle cx="12" cy="5.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'billing':
      return (
        <svg {...common}>
          <path
            d="M7 3.5h10a1 1 0 0 1 1 1v15l-2.2-1.4L13.5 19.5 11 18.1 8.5 19.5 6 18.1V4.5a1 1 0 0 1 1-1Z"
            {...stroke}
          />
          <path d="M9 8.5h6M9 12h6" {...stroke} />
        </svg>
      )
    case 'portal':
      return (
        <svg {...common}>
          <rect x="4" y="4.5" width="16" height="15" rx="2" {...stroke} />
          <path d="M4 9.5h16M9 9.5v10" {...stroke} />
        </svg>
      )
    case 'jira':
      return (
        <svg {...common}>
          <path
            d="M8 4.5h8a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 18V6A1.5 1.5 0 0 1 8 4.5Z"
            {...stroke}
          />
          <path d="M9.5 12.5 11.2 14.2 14.5 10" {...stroke} />
        </svg>
      )
    case 'reports':
      return (
        <svg {...common}>
          <path d="M5 19.5h14" {...stroke} />
          <path d="M7.5 16.5v-5M12 16.5V7.5M16.5 16.5v-8" {...stroke} />
        </svg>
      )
    case 'monitor':
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="11.5" rx="1.5" {...stroke} />
          <path d="M8 19.5h8M12 16.5v3" {...stroke} />
        </svg>
      )
    case 'realtime':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" {...stroke} />
          <path d="M12 8v4.5l3 1.5" {...stroke} />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" {...stroke} />
          <path d="m4.5 7.5 7.5 5.5 7.5-5.5" {...stroke} />
        </svg>
      )
  }
}
