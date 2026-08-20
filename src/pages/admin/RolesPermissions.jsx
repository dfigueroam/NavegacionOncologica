import { Shield, Check, X } from 'lucide-react'

const roles = [
  { name: 'Enfermera Navegadora', description: 'Gestionar el seguimiento clínico de los casos oncológicos asignados.' },
  { name: 'Enfermera GES', description: 'Gestionar el registro de activación de canasta GES para pacientes ISAPRE.' },
  { name: 'Administrador', description: 'Administrar catálogos, usuarios y parámetros configurables del sistema.' },
]

const permissions = [
  { name: 'Crear casos oncológicos', nav: true, ges: false, admin: false },
  { name: 'Registrar eventos clínicos manuales', nav: true, ges: false, admin: false },
  { name: 'Registrar EVG-025 (Canasta GES-ISAPRE)', nav: false, ges: true, admin: false },
  { name: 'Gestionar cola de asignación', nav: true, ges: false, admin: false },
  { name: 'Visualizar y gestionar alertas', nav: true, ges: false, admin: false },
  { name: 'Consultar evolución de casos', nav: true, ges: true, admin: true },
  { name: 'Registrar notas clínicas', nav: true, ges: true, admin: true },
  { name: 'Visualizar dashboard operativo', nav: true, ges: false, admin: true },
  { name: 'Gestionar usuarios y roles', nav: false, ges: false, admin: true },
  { name: 'Administrar catálogos de eventos', nav: false, ges: false, admin: true },
  { name: 'Administrar catálogo de estados', nav: false, ges: false, admin: true },
  { name: 'Configurar plazos y umbrales', nav: false, ges: false, admin: true },
  { name: 'Administrar diagnósticos CIE-10', nav: false, ges: false, admin: true },
  { name: 'Consultar auditoría', nav: false, ges: false, admin: true },
  { name: 'Monitor de integración SAP', nav: false, ges: false, admin: true },
]

export default function RolesPermissions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Roles y Permisos</h1>
        <p className="text-sm text-gray-500 mt-0.5">Matriz de roles y permisos del sistema</p>
      </div>

      {/* Roles Description */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roles.map((role) => (
          <div key={role.name} className="card">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-primary-600" />
              <h3 className="text-sm font-semibold text-gray-900">{role.name}</h3>
            </div>
            <p className="text-xs text-gray-500">{role.description}</p>
          </div>
        ))}
      </div>

      {/* Permissions Matrix */}
      <div className="card p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Matriz de Permisos</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Permiso</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Enfermera Navegadora</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Enfermera GES</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Administrador</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {permissions.map((p) => (
              <tr key={p.name} className="hover:bg-gray-50/50">
                <td className="px-4 py-3 text-sm text-gray-700">{p.name}</td>
                <td className="px-4 py-3 text-center">
                  {p.nav ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 mx-auto" />}
                </td>
                <td className="px-4 py-3 text-center">
                  {p.ges ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 mx-auto" />}
                </td>
                <td className="px-4 py-3 text-center">
                  {p.admin ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 mx-auto" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
