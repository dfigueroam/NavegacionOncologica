import { Activity, ArrowRight, ArrowLeft, CheckCircle, XCircle, Clock } from 'lucide-react'
import { integrationMessages } from '../data/mockData'

export default function IntegrationMonitor() {
  const getStatusIcon = (status) => {
    switch(status) {
      case 'Enviado': case 'Recibido': return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'Error': return <XCircle className="w-4 h-4 text-red-500" />
      default: return <Clock className="w-4 h-4 text-amber-500" />
    }
  }

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Enviado': case 'Recibido': return 'badge-green'
      case 'Error': return 'badge-red'
      default: return 'badge-amber'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Monitor de Integración</h1>
        <p className="text-sm text-gray-500 mt-0.5">Estado de mensajes intercambiados con SAP PI</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card flex items-center gap-4">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">{integrationMessages.filter(m => m.status === 'Enviado' || m.status === 'Recibido').length}</p>
            <p className="text-xs text-gray-500">Exitosos</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <XCircle className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">{integrationMessages.filter(m => m.status === 'Error').length}</p>
            <p className="text-xs text-gray-500">Con error</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">{integrationMessages.length}</p>
            <p className="text-xs text-gray-500">Total mensajes</p>
          </div>
        </div>
      </div>

      {/* Messages Table */}
      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Fecha/Hora</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Dirección</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tipo</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Caso</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Detalle</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Estado</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Reintentos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {integrationMessages.map((msg) => (
              <tr key={msg.id} className="hover:bg-gray-50/50">
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{msg.date}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1 text-xs">
                    {msg.direction.includes('SAP → Sistema') ? (
                      <><span className="text-purple-600 font-medium">SAP</span><ArrowRight className="w-3 h-3 text-gray-400" /><span className="text-blue-600 font-medium">Sistema</span></>
                    ) : (
                      <><span className="text-blue-600 font-medium">Sistema</span><ArrowRight className="w-3 h-3 text-gray-400" /><span className="text-purple-600 font-medium">SAP</span></>
                    )}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{msg.type}</td>
                <td className="px-4 py-3 text-xs font-mono text-primary-700">{msg.caseId}</td>
                <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">{msg.detail}</td>
                <td className="px-4 py-3">
                  <span className={getStatusBadge(msg.status)}>{msg.status}</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{msg.retries}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
