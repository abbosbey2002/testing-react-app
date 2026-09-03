import { NavLink } from 'react-router-dom'
import { getSortedServices } from '../data/services'
import { ServiceGlyph } from './ServiceGlyph'

export function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Системы">
      <ul className="sidebar__list">
        {getSortedServices().map((service) => (
          <li key={service.id}>
            <NavLink
              to={`/${service.slug}`}
              className={({ isActive }) =>
                isActive ? 'sidebar__item sidebar__item--active' : 'sidebar__item'
              }
              title={service.url}
            >
              <ServiceGlyph name={service.icon} className="sidebar__icon" />
              <span className="sidebar__label">{service.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
