import { useState } from 'react'
import { Shield, Search, Filter } from 'lucide-react'
import { auditLog } from '../data/mockData'

export default function Audit() {
  const [search, setSearch] = useState('')
  const [filterAction, setFilterAction] = useState('all')

  const filtered = auditLog.filter(a => {
    const matchSearch = a.detail.toLowerCase().includes(search.toLowerCase()) || 
                        a.user.toLowerCase().includes(search.toLowerCase()) ||
                        a.entityId.toLowerCase().includes(search.toLowerCase())
    const matchAction = filterAction === 'all' || a.action === filterAction
    return matchSearch && matchAction
  })

  const getActionBadge = (action) => {
    switch(action) {
      case 'Caso creado': return 'badge-green'
      case 'Evento registrado': case 'Evento recibido': return 'badge-blue'
      case 'Cambio de estado': return 'badge-purple'
      case 'Alerta gestionada': return 'badge-amber'
      case 'Catálogo actualizado': return 'badge-gray'
      case 'Nota creada': return 'badge-blue'
      default: return 'badge-gray'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Auditoría</h1>
        <p className="text-sm text-gray-500 mt-0.5">Registro de acciones del sistema (solo lectura)</p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[240px] relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por usuario, entidad o detalle..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={filterAction}
            onChange={(e) => setFilterAction(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Todas las acciones</option>
            <option value="Caso creado">Caso creado</option>
            <option value="Evento registrado">Evento registrado</option>
            <option value="Evento recibido">Evento recibido</option>
            <option value="Cambio de estado">Cambio de estado</option>
            <option value="Alerta gestionada">Alerta gestionada</option>
            <option value="Catálogo actualizado">Catálogo actualizado</option>
            <option value="Nota creada">Nota creada</option>
          </select>
        </div>
      </div>

      {/* Audit Log */}
      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Fecha/Hora</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Usuario/Origen</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Acción</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Entidad</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Detalle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50/50">
                <td className="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">{log.date}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{log.user}</td>
                <td className="px-4 py-3">
                  <span className={getActionBadge(log.action)}>{log.action}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs text-gray-600">{log.entity}</span>
                  <span className="text-xs text-gray-400 ml-1">({log.entityId})</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 max-w-md truncate">{log.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
