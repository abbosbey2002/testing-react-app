import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { ServicePanel } from './components/ServicePanel'
import {
  defaultService,
  getServiceBySlug,
} from './data/services'

function HubRoute() {
  const { serviceSlug } = useParams()
  const active = getServiceBySlug(serviceSlug ?? '') ?? defaultService

  if (serviceSlug !== active.slug) {
    return <Navigate to={`/${active.slug}`} replace />
  }

  return <ServicePanel active={active} />
}

export default function App() {
  return (
    <div className="hub">
      <Sidebar />
      <main className="hub__main">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${defaultService.slug}`} replace />}
          />
          <Route path="/:serviceSlug" element={<HubRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
