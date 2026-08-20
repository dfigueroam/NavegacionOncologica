import { Edit2, Plus } from 'lucide-react'
import { diagnosticsCIE10, cancerTypes } from '../../data/mockData'

export default function DiagnosticsCatalog() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mantenedor de Diagnósticos CIE-10</h1>
          <p className="text-sm text-gray-500 mt-0.5">Catálogo de diagnósticos y tipos de cáncer</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nuevo Diagnóstico
        </button>
      </div>

      {/* Cancer Types */}
      <div className="card">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tipos de Cáncer</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Nombre</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Prefijo CIE-10</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Prefijo Eventos</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Estado</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {cancerTypes.map((ct) => (
                <tr key={ct.id} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-xs font-mono text-primary-700">{ct.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{ct.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{ct.cie10Prefix}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{ct.eventPrefix}</td>
                  <td className="px-4 py-3"><span className="badge-green">Activo</span></td>
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

      {/* CIE-10 Codes */}
      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Códigos CIE-10</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Código</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Descripción</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tipo de Cáncer</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Prefijo Eventos</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {diagnosticsCIE10.map((d) => (
              <tr key={d.code} className="hover:bg-gray-50/50">
                <td className="px-4 py-3 text-sm font-mono text-primary-700 font-medium">{d.code}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{d.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{d.cancerType}</td>
                <td className="px-4 py-3"><span className="badge-purple">{d.prefix}</span></td>
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
  )
}
