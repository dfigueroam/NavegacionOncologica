import { Edit2, Plus } from 'lucide-react'
import { estados } from '../../data/mockData'

export default function StatesCatalog() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mantenedor de Estados Clínicos</h1>
          <p className="text-sm text-gray-500 mt-0.5">Catálogo de estados del caso oncológico (EST-01 a EST-13)</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Nuevo Estado
        </button>
      </div>

      <div className="card p-0 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Código</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Nombre</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Carácter</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">¿Final?</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Duración Esperada</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {estados.map((e) => (
              <tr key={e.code} className="hover:bg-gray-50/50">
                <td className="px-4 py-3 text-xs font-mono text-primary-700 font-medium">{e.code}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{e.name}</td>
                <td className="px-4 py-3">
                  <span className={`${
                    e.character === 'Activo' ? 'badge-green' : 
                    e.character === 'Cierre' ? 'badge-red' : 'badge-amber'
                  }`}>{e.character}</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{e.final ? 'Sí' : 'No'}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{e.duration}</td>
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
