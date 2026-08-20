import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, Clock, CheckCircle, MessageSquare, Calendar, XCircle } from 'lucide-react'
import { alerts, cases } from '../data/mockData'

export default function AlertManagement() {
  const [selectedAlert, setSelectedAlert] = useState(null)
  const [filterLevel, setFilterLevel] = useState('all')

  const sortedAlerts = [...alerts].sort((a, b) => {
    const order = { 'Vencida': 0, 'Por vencer': 1, 'Al día': 2 }
    const diff = (order[a.level] ?? 3) - (order[b.level] ?? 3)
    if (diff !== 0) return diff
    return a.managed ? 1 : -1
  })

  const filtered = filterLevel === 'all' ? sortedAlerts : sortedAlerts.filter(a => a.level === filterLevel)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestión de Alertas</h1>
          <p className="text-sm text-gray-500 mt-0.5">Bandeja de alertas operativas</p>
        </div>
        <div className="flex gap-2">
          {['all', 'Vencida', 'Por vencer', 'Al día'].map(level => (
            <button
              key={level}
              onClick={() => setFilterLevel(level)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterLevel === level
                  ? 'bg-primary-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {level === 'all' ? 'Todas' : level}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alert List */}
        <div className="lg:col-span-2 space-y-3">
          {filtered.map((alert) => {
            const relatedCase = cases.find(c => c.id === alert.caseId)
            return (
              <div
                key={alert.id}
                onClick={() => setSelectedAlert(alert)}
                className={`card cursor-pointer transition-all ${
                  selectedAlert?.id === alert.id ? 'ring-2 ring-primary-500' : 'hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
                      alert.level === 'Vencida' ? 'bg-red-500' : alert.level === 'Por vencer' ? 'bg-amber-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{alert.alertCode} — {alert.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {relatedCase?.patient} · {alert.caseId}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span>Inicio: {alert.startDate}</span>
                        <span>Vence: {alert.deadline}</span>
                        {alert.reprogramCount > 0 && (
                          <span className="badge-purple">Reprogramada ×{alert.reprogramCount}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`${alert.level === 'Vencida' ? 'badge-red' : alert.level === 'Por vencer' ? 'badge-amber' : 'badge-green'}`}>
                      {alert.level}
                    </span>
                    {alert.managed && <span className="badge-blue">Gestionada</span>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Management Panel */}
        <div className="lg:col-span-1">
          {selectedAlert ? (
            <div className="card sticky top-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Gestión de Alerta</h3>
              <div className="p-3 bg-gray-50 rounded-lg text-sm space-y-1">
                <p><span className="text-gray-500">Alerta:</span> {selectedAlert.alertCode} — {selectedAlert.name}</p>
                <p><span className="text-gray-500">Caso:</span> {selectedAlert.caseId}</p>
                <p><span className="text-gray-500">Evento origen:</span> {selectedAlert.event}</p>
                <p><span className="text-gray-500">Vencimiento:</span> {selectedAlert.deadline}</p>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  Registrar Gestión
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-3 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-100 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Reprogramar Fecha
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  Registrar Evento de Cierre
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                  <XCircle className="w-4 h-4" />
                  Cancelar Administrativamente
                </button>
              </div>

              {/* Motivo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Motivo / Nota</label>
                <textarea
                  placeholder="Describir la gestión realizada..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 resize-none"
                  rows={3}
                ></textarea>
              </div>

              <Link to={`/cases/${selectedAlert.caseId}`} className="block text-center text-sm text-primary-600 hover:text-primary-700">
                Ver detalle del caso →
              </Link>
            </div>
          ) : (
            <div className="card text-center py-12">
              <AlertTriangle className="w-10 h-10 text-gray-300 mx-auto" />
              <p className="text-sm text-gray-500 mt-3">Seleccione una alerta para gestionarla</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
