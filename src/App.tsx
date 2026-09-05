import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { ServicePanel } from './components/ServicePanel'
import { defaultService, getServiceById } from './data/services'

function HubRoute() {
  const { serviceId } = useParams()
  const active = getServiceById(serviceId ?? '') ?? defaultService

  if (serviceId !== active.id) {
    return <Navigate to={`/${active.id}`} replace />
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
            element={<Navigate to={`/${defaultService.id}`} replace />}
          />
          <Route path="/:serviceId" element={<HubRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
