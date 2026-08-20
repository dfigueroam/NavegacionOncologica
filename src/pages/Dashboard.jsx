import { Link } from 'react-router-dom'
import { AlertTriangle, Clock, FileText, ClipboardList, ArrowRight, TrendingUp, Shield } from 'lucide-react'
import { cases, alerts, assignmentQueue, gesAlerts } from '../data/mockData'

export default function Dashboard() {
  const activeCases = cases.filter(c => !['EST-09', 'EST-10', 'EST-12'].includes(c.state))
  const expiredAlerts = alerts.filter(a => a.level === 'Vencida')
  const aboutToExpireAlerts = alerts.filter(a => a.level === 'Por vencer')
  const pendingQueue = assignmentQueue.filter(q => q.status === 'Pendiente')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-0.5">Resumen operativo — Navegación Oncológica</p>
        </div>
        <Link to="/patient-search" className="btn-primary flex items-center gap-2">
          <span>Buscar Paciente</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card border-l-4 border-l-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Alertas Vencidas</p>
              <p className="text-3xl font-bold text-red-600 mt-1">{expiredAlerts.length}</p>
            </div>
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <Link to="/alert-management" className="text-xs text-red-600 hover:text-red-700 mt-3 inline-flex items-center gap-1">
            Ver alertas <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="card border-l-4 border-l-amber-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Alertas Por Vencer</p>
              <p className="text-3xl font-bold text-amber-600 mt-1">{aboutToExpireAlerts.length}</p>
            </div>
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-500" />
            </div>
          </div>
          <Link to="/alert-management" className="text-xs text-amber-600 hover:text-amber-700 mt-3 inline-flex items-center gap-1">
            Ver alertas <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="card border-l-4 border-l-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Casos Activos</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">{activeCases.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <Link to="/cases" className="text-xs text-blue-600 hover:text-blue-700 mt-3 inline-flex items-center gap-1">
            Ver casos <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="card border-l-4 border-l-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pendientes Asignación</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">{pendingQueue.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <Link to="/assignment-queue" className="text-xs text-purple-600 hover:text-purple-700 mt-3 inline-flex items-center gap-1">
            Ver cola <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* GES Compliance + Alerts Priority */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GES Section */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary-700" />
            <h2 className="text-lg font-semibold text-gray-900">Cumplimiento GES</h2>
          </div>
          <div className="space-y-3">
            {gesAlerts.map((ga) => (
              <div key={ga.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-800">{ga.guarantee} — {ga.name}</p>
                  <p className="text-xs text-gray-500">Caso {ga.caseId} · Vence: {ga.deadline}</p>
                </div>
                <span className={`${ga.level === 'Vencida' ? 'badge-red' : ga.level === 'Por vencer' ? 'badge-amber' : 'badge-green'}`}>
                  {ga.level}
                </span>
              </div>
            ))}
            {gesAlerts.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">Sin alertas GES activas</p>
            )}
          </div>
        </div>

        {/* Priority Alerts */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h2 className="text-lg font-semibold text-gray-900">Alertas que requieren acción</h2>
            </div>
            <Link to="/alert-management" className="text-xs text-primary-600 hover:text-primary-700">Ver todas</Link>
          </div>
          <div className="space-y-3">
            {alerts
              .filter(a => a.level !== 'Al día')
              .sort((a, b) => {
                const order = { 'Vencida': 0, 'Por vencer': 1 }
                return (order[a.level] ?? 2) - (order[b.level] ?? 2)
              })
              .map((alert) => {
                const relatedCase = cases.find(c => c.id === alert.caseId)
                return (
                  <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{alert.alertCode} — {alert.name}</p>
                      <p className="text-xs text-gray-500">
                        {relatedCase?.patient} · {alert.caseId}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`${alert.level === 'Vencida' ? 'badge-red' : 'badge-amber'}`}>
                        {alert.level}
                      </span>
                      {alert.managed && <span className="badge-blue">Gestionada</span>}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>

      {/* Cases by state */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary-700" />
          <h2 className="text-lg font-semibold text-gray-900">Distribución de Casos por Estado</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            { name: 'Sospecha', count: cases.filter(c => c.state === 'EST-01').length, color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Diagnóstico', count: cases.filter(c => c.state === 'EST-02').length, color: 'bg-orange-100 text-orange-800' },
            { name: 'Etapificación', count: cases.filter(c => c.state === 'EST-03').length, color: 'bg-blue-100 text-blue-800' },
            { name: 'Plan atención', count: cases.filter(c => c.state === 'EST-04').length, color: 'bg-indigo-100 text-indigo-800' },
            { name: 'Tratamiento', count: cases.filter(c => c.state === 'EST-05').length, color: 'bg-purple-100 text-purple-800' },
            { name: 'Seguimiento', count: cases.filter(c => c.state === 'EST-06').length, color: 'bg-green-100 text-green-800' },
            { name: 'Cerrados', count: cases.filter(c => ['EST-09', 'EST-10', 'EST-12'].includes(c.state)).length, color: 'bg-gray-100 text-gray-800' },
          ].map((item) => (
            <div key={item.name} className={`${item.color} rounded-xl p-4 text-center`}>
              <p className="text-2xl font-bold">{item.count}</p>
              <p className="text-xs mt-1">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
