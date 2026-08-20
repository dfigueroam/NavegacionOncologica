import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, Users, FileText, Search, ClipboardList, Bell, 
  Activity, Shield, Settings, ChevronDown, ChevronRight, LogOut, 
  User, Menu, X, Database, AlertTriangle, ListChecks, Stethoscope
} from 'lucide-react'
import { currentUser } from '../data/mockData'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Listado de Casos', href: '/cases', icon: FileText },
  { name: 'Búsqueda de Paciente', href: '/patient-search', icon: Search },
  { name: 'Cola de Asignación', href: '/assignment-queue', icon: ClipboardList, badge: 4 },
  { name: 'Gestión de Alertas', href: '/alert-management', icon: Bell },
  { name: 'Auditoría', href: '/audit', icon: Shield },
  { name: 'Monitor de Integración', href: '/integration-monitor', icon: Activity },
]

const adminNavigation = [
  { name: 'Eventos Clínicos', href: '/admin/events', icon: ListChecks },
  { name: 'Estados', href: '/admin/states', icon: Database },
  { name: 'Alertas y Plazos', href: '/admin/alerts', icon: AlertTriangle },
  { name: 'Diagnósticos CIE-10', href: '/admin/diagnostics', icon: Stethoscope },
  { name: 'Usuarios', href: '/admin/users', icon: Users },
  { name: 'Roles y Permisos', href: '/admin/roles', icon: Settings },
]

export default function Layout({ children, onLogout }) {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [adminOpen, setAdminOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-primary-900 text-white transition-all duration-300 flex flex-col fixed h-full z-30`}>
        {/* Logo */}
        <div className="p-4 border-b border-primary-800 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center">
                <img src="/logo.jpg" alt="Clínica Alemana de Osorno" className="h-7 w-auto" />
              </div>
              <div>
                <h1 className="text-sm font-bold leading-tight">Navegación</h1>
                <p className="text-[10px] text-primary-300">Oncológica</p>
              </div>
            </div>
          )}
          {!sidebarOpen && (
            <div className="bg-white rounded-lg p-1 flex items-center justify-center mx-auto">
              <img src="/logo.jpg" alt="Logo" className="h-6 w-auto" />
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 rounded-lg hover:bg-primary-800 transition-colors">
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive 
                        ? 'bg-white/15 text-white font-medium' 
                        : 'text-primary-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {sidebarOpen && (
                      <>
                        <span className="flex-1">{item.name}</span>
                        {item.badge && (
                          <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>
                        )}
                      </>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Admin section */}
          <div className="mt-6 px-3">
            <button
              onClick={() => setAdminOpen(!adminOpen)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-primary-200 hover:bg-white/10 hover:text-white transition-colors w-full"
            >
              <Settings className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && (
                <>
                  <span className="flex-1 text-left">Administración</span>
                  {adminOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </>
              )}
            </button>
            {adminOpen && sidebarOpen && (
              <ul className="mt-1 ml-4 space-y-1 border-l border-primary-700 pl-3">
                {adminNavigation.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                          isActive
                            ? 'bg-white/15 text-white font-medium'
                            : 'text-primary-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-primary-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4" />
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate">{currentUser.name}</p>
                <p className="text-[10px] text-primary-300 truncate">{currentUser.role}</p>
              </div>
            )}
            {sidebarOpen && (
              <div className="flex gap-1">
                <Link to="/profile" className="p-1.5 rounded hover:bg-primary-800 transition-colors">
                  <User className="w-3.5 h-3.5 text-primary-300" />
                </Link>
                <button onClick={onLogout} className="p-1.5 rounded hover:bg-primary-800 transition-colors">
                  <LogOut className="w-3.5 h-3.5 text-primary-300" />
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
