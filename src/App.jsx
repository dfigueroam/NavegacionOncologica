import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CasesList from './pages/CasesList'
import CaseDetail from './pages/CaseDetail'
import NewCase from './pages/NewCase'
import PatientSearch from './pages/PatientSearch'
import AssignmentQueue from './pages/AssignmentQueue'
import AlertManagement from './pages/AlertManagement'
import Audit from './pages/Audit'
import IntegrationMonitor from './pages/IntegrationMonitor'
import EventsCatalog from './pages/admin/EventsCatalog'
import StatesCatalog from './pages/admin/StatesCatalog'
import AlertsCatalog from './pages/admin/AlertsCatalog'
import DiagnosticsCatalog from './pages/admin/DiagnosticsCatalog'
import UsersManagement from './pages/admin/UsersManagement'
import RolesPermissions from './pages/admin/RolesPermissions'
import Profile from './pages/Profile'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <Router>
      <Layout onLogout={() => setIsAuthenticated(false)}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cases" element={<CasesList />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/cases/new" element={<NewCase />} />
          <Route path="/patient-search" element={<PatientSearch />} />
          <Route path="/assignment-queue" element={<AssignmentQueue />} />
          <Route path="/alert-management" element={<AlertManagement />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/integration-monitor" element={<IntegrationMonitor />} />
          <Route path="/admin/events" element={<EventsCatalog />} />
          <Route path="/admin/states" element={<StatesCatalog />} />
          <Route path="/admin/alerts" element={<AlertsCatalog />} />
          <Route path="/admin/diagnostics" element={<DiagnosticsCatalog />} />
          <Route path="/admin/users" element={<UsersManagement />} />
          <Route path="/admin/roles" element={<RolesPermissions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
