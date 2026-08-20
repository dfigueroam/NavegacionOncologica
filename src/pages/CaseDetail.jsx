import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileText, Clock, MessageSquare, Activity, AlertTriangle, Plus, ExternalLink } from 'lucide-react'
import { cases, caseEvents, clinicalNotes, alerts } from '../data/mockData'

export default function CaseDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('events')
  const caseData = cases.find(c => c.id === id) || cases[0]
  const events = caseEvents[caseData.id] || caseEvents['CO-2024-001']
  const notes = clinicalNotes[caseData.id] || clinicalNotes['CO-2024-001'] || []
  const caseAlerts = alerts.filter(a => a.caseId === caseData.id)
  const patientCases = cases.filter(c => c.rut === caseData.rut && c.id !== caseData.id)

  const tabs = [
    { id: 'events', label: 'Eventos', icon: Activity },
    { id: 'traceability', label: 'Trazabilidad', icon: Clock },
    { id: 'notes', label: 'Notas Clínicas', icon: MessageSquare },
    { id: 'alerts', label: 'Alertas', icon: AlertTriangle },
    { id: 'history', label: 'Historial Casos', icon: FileText },
  ]

  const stateTimeline = [
    { state: 'En tratamiento', date: '2024-06-15' },
    { state: 'Plan de atención definido', date: '2024-06-15' },
    { state: 'Etapificación', date: '2024-05-20' },
    { state: 'Diagnóstico', date: '2024-04-05' },
    { state: 'Sospecha', date: '2024-03-10' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/cases" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">{caseData.patient}</h1>
            <span className="badge-blue">{caseData.stateName}</span>
          </div>
          <p className="text-sm text-gray-500 mt-0.5">
            {caseData.id} · RUT: {caseData.rut} · {caseData.cie10} ({caseData.cancer})
          </p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Registrar Evento
        </button>
      </div>

      {/* Case Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-xs text-gray-500 uppercase font-medium">Estado Actual</p>
          <p className="text-lg font-semibold text-gray-900 mt-1">{caseData.stateName}</p>
          <p className="text-xs text-gray-500 mt-0.5">Desde: {caseData.stateDate}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 uppercase font-medium">Diagnóstico</p>
          <p className="text-lg font-semibold text-gray-900 mt-1">{caseData.cie10}</p>
          <p className="text-xs text-gray-500 mt-0.5">CIEO3: {caseData.cieo3 || '—'}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 uppercase font-medium">Clasificación</p>
          <p className="text-lg font-semibold text-gray-900 mt-1">{caseData.tnm || '—'}</p>
          <p className="text-xs text-gray-500 mt-0.5">Estadio: {caseData.staging || '—'}</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500 uppercase font-medium">Nivel de Alerta</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-lg font-semibold ${
              caseData.alertLevel === 'Vencida' ? 'text-red-600' : 
              caseData.alertLevel === 'Por vencer' ? 'text-amber-600' : 'text-green-600'
            }`}>{caseData.alertLevel}</span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">GES: {caseData.gesAlert}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="card p-0">
        <div className="border-b border-gray-100">
          <nav className="flex px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Historial de Eventos</h3>
                <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs">
                  <option>Todos los eventos</option>
                  <option>Solo manuales</option>
                  <option>Solo automatizados</option>
                </select>
              </div>
              {events.map((evt) => (
                <div key={evt.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    evt.origin === 'SAP' ? 'bg-purple-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-500">{evt.eventId}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        evt.origin === 'SAP' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                      }`}>{evt.origin}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mt-0.5">{evt.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Fecha evento: {evt.date} · Registrado: {evt.registerDate} · Por: {evt.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Traceability Tab */}
          {activeTab === 'traceability' && (
            <div className="space-y-0">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Trazabilidad Paciente</h3>
              <div className="relative pl-6">
                <div className="absolute left-2.5 top-0 bottom-0 w-px bg-gray-200"></div>
                {stateTimeline.map((item, idx) => (
                  <div key={idx} className="relative pb-6 last:pb-0">
                    <div className={`absolute left-[-14px] w-5 h-5 rounded-full border-2 ${
                      idx === 0 ? 'bg-primary-600 border-primary-600' : 'bg-white border-gray-300'
                    }`}></div>
                    <div className="ml-4">
                      <p className={`text-sm font-medium ${idx === 0 ? 'text-primary-700' : 'text-gray-700'}`}>
                        {item.state}
                      </p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes Tab */}
          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-700">Notas Clínicas</h3>
                <button className="btn-primary text-sm flex items-center gap-1">
                  <Plus className="w-3 h-3" />
                  Nueva Nota
                </button>
              </div>
              {/* Add note input */}
              <div className="p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <textarea
                  placeholder="Escribir nueva nota clínica..."
                  className="w-full bg-transparent text-sm resize-none focus:outline-none"
                  rows={2}
                ></textarea>
              </div>
              {notes.map((note) => (
                <div key={note.id} className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-800">{note.text}</p>
                  <p className="text-xs text-gray-500 mt-2">{note.user} — {note.date}</p>
                </div>
              ))}
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Alertas del Caso</h3>
              {caseAlerts.length > 0 ? caseAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{alert.alertCode} — {alert.name}</p>
                    <p className="text-xs text-gray-500">Inicio: {alert.startDate} · Vence: {alert.deadline}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`${alert.level === 'Vencida' ? 'badge-red' : alert.level === 'Por vencer' ? 'badge-amber' : 'badge-green'}`}>
                      {alert.level}
                    </span>
                    <Link to="/alert-management" className="text-xs text-primary-600 hover:underline">Gestionar</Link>
                  </div>
                </div>
              )) : (
                <p className="text-sm text-gray-500 text-center py-8">Sin alertas activas para este caso</p>
              )}
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Otros Casos del Paciente (RUT: {caseData.rut})</h3>
              {patientCases.length > 0 ? patientCases.map((pc) => (
                <div key={pc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{pc.id}</p>
                    <p className="text-xs text-gray-500">{pc.cie10} · {pc.stateName} · Creado: {pc.createdAt}</p>
                  </div>
                  <Link to={`/cases/${pc.id}`} className="p-2 hover:bg-white rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-primary-600" />
                  </Link>
                </div>
              )) : (
                <p className="text-sm text-gray-500 text-center py-8">No existen otros casos oncológicos para este paciente</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
