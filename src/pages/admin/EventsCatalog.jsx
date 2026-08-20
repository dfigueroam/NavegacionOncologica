import { useState } from 'react'
import { Plus, Edit2, Search } from 'lucide-react'
import { eventos } from '../../data/mockData'

export default function EventsCatalog() {
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('all')

  const filtered = eventos.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.id.toLowerCase().includes(search.toLowerCase())
    const matchType = filterType === 'all' || e.type === filterType
    return matchSearch && matchType
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mantenedor de Eventos Clínicos</h1>
          <p className="text-sm text-gray-500 mt-0.5">Catálogo de eventos EVG y específicos</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nuevo Evento
        </button>
      </div>

      <div className="card">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar evento..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="all">Todos los tipos</option>
            <option value="EVG">EVG (General)</option>
            <option value="EVEMAMA">EVEMAMA (Mama)</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Nombre</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tipo</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Origen</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Código SAP</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Diagnóstico</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-xs font-mono text-primary-700">{e.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{e.name}</td>
                  <td className="px-4 py-3">
                    <span className={e.type === 'EVG' ? 'badge-blue' : 'badge-purple'}>{e.type}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={e.origin === 'Manual' ? 'badge-gray' : 'badge-green'}>{e.origin}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600">{e.codes}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{e.diagnosis}</td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
