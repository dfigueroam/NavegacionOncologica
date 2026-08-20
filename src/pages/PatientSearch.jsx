import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, User, FileText, Plus, ExternalLink } from 'lucide-react'
import { cases } from '../data/mockData'

export default function PatientSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searched, setSearched] = useState(false)
  const [foundPatient, setFoundPatient] = useState(null)

  const handleSearch = () => {
    setSearched(true)
    // Simulate finding a patient
    if (searchTerm) {
      const found = cases.find(c => c.rut.includes(searchTerm) || c.patient.toLowerCase().includes(searchTerm.toLowerCase()))
      if (found) {
        setFoundPatient(found)
      } else {
        setFoundPatient(null)
      }
    }
  }

  const patientCases = foundPatient ? cases.filter(c => c.rut === foundPatient.rut) : []

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Búsqueda de Paciente</h1>
        <p className="text-sm text-gray-500 mt-0.5">Buscar paciente por RUT o Pasaporte</p>
      </div>

      {/* Search */}
      <div className="card">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Ingrese RUT (ej: 12.345.678-9) o Pasaporte..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button onClick={handleSearch} className="btn-primary">Buscar</button>
        </div>
      </div>

      {/* Results */}
      {searched && foundPatient && (
        <>
          {/* Patient Info */}
          <div className="card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{foundPatient.patient}</h2>
                <p className="text-sm text-gray-500">RUT: {foundPatient.rut}</p>
              </div>
              <Link to="/cases/new" className="ml-auto btn-primary flex items-center gap-2 text-sm">
                <Plus className="w-4 h-4" />
                Nuevo Caso
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-xs text-gray-500">Edad</p>
                <p className="text-sm font-medium">{foundPatient.age} años</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Previsión</p>
                <p className="text-sm font-medium">{foundPatient.prevision}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Casos Activos</p>
                <p className="text-sm font-medium">{patientCases.filter(c => !['EST-09','EST-10','EST-12'].includes(c.state)).length}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Casos</p>
                <p className="text-sm font-medium">{patientCases.length}</p>
              </div>
            </div>
          </div>

          {/* Patient Cases */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Casos Oncológicos Asociados</h3>
            <div className="space-y-3">
              {patientCases.map((c) => (
                <div key={c.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{c.id}</p>
                      <p className="text-xs text-gray-500">{c.cie10} · {c.cancer} · Creado: {c.createdAt}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="badge-blue">{c.stateName}</span>
                    <Link to={`/cases/${c.id}`} className="p-2 hover:bg-white rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4 text-primary-600" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {searched && !foundPatient && searchTerm && (
        <div className="card text-center py-12">
          <User className="w-12 h-12 text-gray-300 mx-auto" />
          <p className="text-gray-500 mt-3">No se encontró paciente con los datos ingresados</p>
          <p className="text-sm text-gray-400 mt-1">Verifique el RUT o Pasaporte e intente nuevamente</p>
        </div>
      )}

      {!searched && (
        <div className="card text-center py-12">
          <Search className="w-12 h-12 text-gray-300 mx-auto" />
          <p className="text-gray-500 mt-3">Ingrese un RUT o Pasaporte para buscar un paciente</p>
          <p className="text-sm text-gray-400 mt-1">Podrá ver sus datos y casos oncológicos asociados</p>
        </div>
      )}
    </div>
  )
}
