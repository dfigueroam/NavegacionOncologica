import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Filter, Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { cases } from '../data/mockData'

export default function CasesList() {
  const [search, setSearch] = useState('')
  const [filterState, setFilterState] = useState('all')
  const [filterAlert, setFilterAlert] = useState('all')

  const filtered = cases.filter(c => {
    const normalize = (str) => str.replace(/\./g, '').toLowerCase()
    const matchSearch = c.patient.toLowerCase().includes(search.toLowerCase()) || 
                        normalize(c.rut).includes(normalize(search)) || 
                        c.id.toLowerCase().includes(search.toLowerCase())
    const matchState = filterState === 'all' || c.state === filterState
    const matchAlert = filterAlert === 'all' || c.alertLevel === filterAlert
    return matchSearch && matchState && matchAlert
  })

  const getAlertBadge = (level) => {
    switch(level) {
      case 'Vencida': return 'badge-red'
      case 'Por vencer': return 'badge-amber'
      case 'Al día': return 'badge-green'
      default: return 'badge-gray'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Listado de Casos Oncológicos</h1>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} casos encontrados</p>
        </div>
        <Link to="/cases/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Nuevo Caso</span>
        </Link>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[240px] relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre, RUT o ID de caso..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Todos los estados</option>
            <option value="EST-01">Sospecha</option>
            <option value="EST-02">Diagnóstico</option>
            <option value="EST-03">Etapificación</option>
            <option value="EST-04">Plan de atención</option>
            <option value="EST-05">En tratamiento</option>
            <option value="EST-06">En seguimiento</option>
            <option value="EST-07">Sospecha progresión</option>
            <option value="EST-09">Fallecido</option>
            <option value="EST-10">Descartado</option>
            <option value="EST-12">Alta médica</option>
          </select>
          <select
            value={filterAlert}
            onChange={(e) => setFilterAlert(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Todas las alertas</option>
            <option value="Vencida">Vencida</option>
            <option value="Por vencer">Por vencer</option>
            <option value="Al día">Al día</option>
          </select>
          <button className="btn-secondary flex items-center gap-2 text-sm">
            <Download className="w-4 h-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Paciente</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">RUT</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Diagnóstico</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Estado</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Alerta</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">GES</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Último Evento</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-3 text-sm font-mono text-primary-700">{c.id}</td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-900">{c.patient}</p>
                    <p className="text-xs text-gray-500">{c.navigator}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{c.rut}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{c.cie10}</td>
                  <td className="px-4 py-3">
                    <span className="badge-blue">{c.stateName}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={getAlertBadge(c.alertLevel)}>{c.alertLevel}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={getAlertBadge(c.gesAlert)}>{c.gesAlert}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{c.lastEvent}</td>
                  <td className="px-4 py-3">
                    <Link to={`/cases/${c.id}`} className="p-2 hover:bg-primary-50 rounded-lg transition-colors inline-flex">
                      <Eye className="w-4 h-4 text-primary-600" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <p className="text-sm text-gray-500">Mostrando 1-{filtered.length} de {filtered.length}</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">1</span>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50" disabled>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
