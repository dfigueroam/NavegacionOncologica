import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ClipboardList, Check, X, ExternalLink, AlertCircle } from 'lucide-react'
import { assignmentQueue, cases } from '../data/mockData'

export default function AssignmentQueue() {
  const [queue, setQueue] = useState(assignmentQueue)
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleConfirm = (item) => {
    setSelectedItem(item)
    setShowModal(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Cola de Asignación</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Eventos pendientes de asignación a caso oncológico — {queue.filter(q => q.status === 'Pendiente').length} pendientes
        </p>
      </div>

      {/* Queue items */}
      <div className="space-y-4">
        {queue.filter(q => q.status === 'Pendiente').map((item) => (
          <div key={item.id} className="card">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-500">{item.eventId}</span>
                    <span className="badge-purple">SAP</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mt-1">{item.eventName}</p>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-gray-500">
                    <div>
                      <span className="text-gray-400">Paciente:</span>
                      <p className="font-medium text-gray-700">{item.patient}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">RUT:</span>
                      <p className="font-medium text-gray-700">{item.rut}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Fecha evento:</span>
                      <p className="font-medium text-gray-700">{item.eventDate}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Código SAP:</span>
                      <p className="font-medium text-gray-700">{item.sapCode}</p>
                    </div>
                  </div>

                  {/* Cases to assign */}
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs font-medium text-gray-600 mb-2">Caso(s) activo(s) del paciente:</p>
                    {item.activeCases.map(cId => {
                      const c = cases.find(cas => cas.id === cId)
                      return c ? (
                        <div key={cId} className="flex items-center justify-between py-1">
                          <span className="text-xs text-gray-700">{c.id} — {c.stateName} ({c.cie10})</span>
                          <Link to={`/cases/${c.id}`} className="text-xs text-primary-600 hover:underline">Ver caso</Link>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                <button
                  onClick={() => handleConfirm(item)}
                  className="flex items-center gap-1 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors"
                >
                  <Check className="w-4 h-4" />
                  Confirmar
                </button>
                <button className="flex items-center gap-1 px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                  <X className="w-4 h-4" />
                  Descartar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {queue.filter(q => q.status === 'Pendiente').length === 0 && (
        <div className="card text-center py-12">
          <Check className="w-12 h-12 text-green-300 mx-auto" />
          <p className="text-gray-500 mt-3">No hay eventos pendientes de asignación</p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirmar Asignación</h3>
            <p className="text-sm text-gray-600 mb-4">
              ¿Asignar el evento <strong>{selectedItem?.eventName}</strong> al caso <strong>{selectedItem?.activeCases[0]}</strong>?
            </p>
            <div className="p-3 bg-blue-50 rounded-lg mb-4">
              <p className="text-xs text-blue-700">
                <AlertCircle className="w-3 h-3 inline mr-1" />
                El evento será registrado en el historial del caso y evaluado para cambio de estado.
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="btn-secondary">Cancelar</button>
              <button onClick={() => setShowModal(false)} className="btn-primary">Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
