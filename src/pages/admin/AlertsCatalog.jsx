import { Edit2, Plus } from 'lucide-react'
import { alertsCatalog } from '../../data/mockData'

export default function AlertsCatalog() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mantenedor de Alertas y Plazos</h1>
          <p className="text-sm text-gray-500 mt-0.5">Configuración de plazos y umbrales del motor de alertas</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nueva Alerta
        </button>
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Nombre</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Evento que abre</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Plazo (días)</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Umbral</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Día Alerta</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {alertsCatalog.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50/50">
                <td className="px-4 py-3 text-xs font-mono text-primary-700 font-medium">{a.id}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{a.name}</td>
                <td className="px-4 py-3 text-xs text-gray-600">{a.event}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">{a.days || '—'}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{a.threshold}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{a.thresholdDay || '—'}</td>
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

      {/* GES Alerts */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Alertas GES (AL-GES-1 a AL-GES-5)</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Garantía</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Evento que abre</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Plazo GES</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Condición de cierre</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { id: 'AL-GES-1', guarantee: 'GO-1', event: 'EVG-001/002', days: '45 días', close: 'EVG-004 o EVG-005' },
                { id: 'AL-GES-2', guarantee: 'GO-2', event: 'EVG-004', days: '45 días', close: 'EVG-006' },
                { id: 'AL-GES-3', guarantee: 'GO-3', event: 'EVG-006', days: '30 días', close: 'Primer evento de tratamiento' },
                { id: 'AL-GES-4', guarantee: 'GO-4', event: 'EVG-007', days: '20 días', close: 'Primer evento de tratamiento' },
                { id: 'AL-GES-5', guarantee: 'GO-5', event: 'Último evento tratamiento', days: '90 días', close: 'EVG-015' },
              ].map((a) => (
                <tr key={a.id} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-xs font-mono text-primary-700 font-medium">{a.id}</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-700">{a.guarantee}</td>
                  <td className="px-4 py-3 text-xs text-gray-600">{a.event}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{a.days}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{a.close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
