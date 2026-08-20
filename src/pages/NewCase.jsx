import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search, Check, ChevronRight } from 'lucide-react'
import { diagnosticsCIE10 } from '../data/mockData'

export default function NewCase() {
  const [step, setStep] = useState(1)
  const [patientRut, setPatientRut] = useState('15.432.109-K')

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/cases" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Agregar Nuevo Caso</h1>
          <p className="text-sm text-gray-500 mt-0.5">Registro de nuevo caso oncológico</p>
        </div>
      </div>

      {/* Steps indicator */}
      <div className="card">
        <div className="flex items-center justify-between">
          {['Paciente', 'Datos del Caso', 'Evento de Ingreso', 'Confirmación'].map((s, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step > idx + 1 ? 'bg-green-100 text-green-700' :
                step === idx + 1 ? 'bg-primary-600 text-white' :
                'bg-gray-100 text-gray-500'
              }`}>
                {step > idx + 1 ? <Check className="w-4 h-4" /> : idx + 1}
              </div>
              <span className={`text-sm ${step === idx + 1 ? 'font-medium text-gray-900' : 'text-gray-500'}`}>{s}</span>
              {idx < 3 && <ChevronRight className="w-4 h-4 text-gray-300 ml-2" />}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Patient */}
      {step === 1 && (
        <div className="card space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Buscar Paciente</h2>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={patientRut}
              onChange={(e) => setPatientRut(e.target.value)}
              placeholder="Ingrese RUT o Pasaporte..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500"
            />
          </div>
          {/* Patient found */}
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Paciente encontrado</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><span className="text-gray-500">Nombre:</span> <span className="font-medium">Francisca Paz Soto Díaz</span></div>
              <div><span className="text-gray-500">RUT:</span> <span className="font-medium">15.432.109-K</span></div>
              <div><span className="text-gray-500">Edad:</span> <span className="font-medium">45 años</span></div>
              <div><span className="text-gray-500">Previsión:</span> <span className="font-medium">FONASA</span></div>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={() => setStep(2)} className="btn-primary">Continuar</button>
          </div>
        </div>
      )}

      {/* Step 2: Case data */}
      {step === 2 && (
        <div className="card space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Datos del Caso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Diagnóstico CIE-10</label>
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500">
                <option value="">Seleccionar...</option>
                {diagnosticsCIE10.map(d => (
                  <option key={d.code} value={d.code}>{d.code} — {d.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patología GES</label>
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500">
                <option value="yes">Sí — Cáncer de mama</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de ingreso</label>
              <input type="date" defaultValue="2024-07-05" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Navegadora asignada</label>
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500">
                <option>María González</option>
                <option>Carmen Silva</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(1)} className="btn-secondary">Anterior</button>
            <button onClick={() => setStep(3)} className="btn-primary">Continuar</button>
          </div>
        </div>
      )}

      {/* Step 3: Initial event */}
      {step === 3 && (
        <div className="card space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Evento Clínico de Ingreso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Evento de ingreso</label>
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500">
                <option value="EVG-001">EVG-001 — Atención médica con sospecha oncológica</option>
                <option value="EVG-002">EVG-002 — Imagen con sospecha oncológica</option>
                <option value="EVG-004">EVG-004 — Confirmación oncológica</option>
                <option value="EVG-015">EVG-015 — Inicio de seguimiento</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fecha del evento</label>
              <input type="date" defaultValue="2024-07-05" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-700">
              <strong>Estado inicial resultante:</strong> Sospecha (EST-01)
            </p>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(2)} className="btn-secondary">Anterior</button>
            <button onClick={() => setStep(4)} className="btn-primary">Continuar</button>
          </div>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="card space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Confirmación del Caso</h2>
          <div className="p-4 bg-gray-50 rounded-lg space-y-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><span className="text-gray-500">Paciente:</span> <span className="font-medium">Francisca Paz Soto Díaz</span></div>
              <div><span className="text-gray-500">RUT:</span> <span className="font-medium">15.432.109-K</span></div>
              <div><span className="text-gray-500">Diagnóstico:</span> <span className="font-medium">C50.9 — Tumor maligno mama</span></div>
              <div><span className="text-gray-500">GES:</span> <span className="font-medium">Sí</span></div>
              <div><span className="text-gray-500">Evento:</span> <span className="font-medium">EVG-001 — Sospecha oncológica</span></div>
              <div><span className="text-gray-500">Estado inicial:</span> <span className="font-medium">Sospecha</span></div>
              <div><span className="text-gray-500">Fecha ingreso:</span> <span className="font-medium">2024-07-05</span></div>
              <div><span className="text-gray-500">Navegadora:</span> <span className="font-medium">María González</span></div>
            </div>
          </div>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-xs text-amber-700">
              Al confirmar, se enviará la notificación de creación del caso a SAP (Estado = Activo).
            </p>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(3)} className="btn-secondary">Anterior</button>
            <Link to="/cases" className="btn-primary">Confirmar y Crear Caso</Link>
          </div>
        </div>
      )}
    </div>
  )
}
