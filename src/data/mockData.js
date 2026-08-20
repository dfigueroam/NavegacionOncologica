// ============ USUARIOS ============
export const users = [
  { id: 1, name: 'María González', email: 'maria.gonzalez@clinica.cl', role: 'Enfermera Navegadora', active: true },
  { id: 2, name: 'Carmen Silva', email: 'carmen.silva@clinica.cl', role: 'Enfermera Navegadora', active: true },
  { id: 3, name: 'Patricia Muñoz', email: 'patricia.munoz@clinica.cl', role: 'Enfermera GES', active: true },
  { id: 4, name: 'Roberto Díaz', email: 'roberto.diaz@clinica.cl', role: 'Administrador', active: true },
  { id: 5, name: 'Claudia Fernández', email: 'claudia.fernandez@clinica.cl', role: 'Enfermera Navegadora', active: false },
];

export const currentUser = users[0];

// ============ ESTADOS ============
export const estados = [
  { code: 'EST-01', name: 'Sospecha', character: 'Activo', final: false, duration: '10 días' },
  { code: 'EST-02', name: 'Diagnóstico', character: 'Activo', final: false, duration: '10 días' },
  { code: 'EST-03', name: 'Etapificación', character: 'Activo', final: false, duration: '10 días' },
  { code: 'EST-04', name: 'Plan de atención definido', character: 'Activo', final: false, duration: '5 días' },
  { code: 'EST-05', name: 'En tratamiento', character: 'Activo', final: false, duration: '30 días' },
  { code: 'EST-06', name: 'En seguimiento', character: 'Activo', final: false, duration: '12 meses' },
  { code: 'EST-07', name: 'Sospecha de progresión/recaída', character: 'Activo', final: false, duration: '5 días' },
  { code: 'EST-08', name: 'Confirmación de progresión/recaída', character: 'Activo', final: false, duration: '10 días' },
  { code: 'EST-09', name: 'Fallecido', character: 'Cierre', final: true, duration: '—' },
  { code: 'EST-10', name: 'Descartado', character: 'Cierre', final: true, duration: '—' },
  { code: 'EST-11', name: 'Inactivo por traslado', character: 'Pausa', final: false, duration: '—' },
  { code: 'EST-12', name: 'Alta médica', character: 'Cierre', final: true, duration: '—' },
  { code: 'EST-13', name: 'Rechazo de atención', character: 'Activo', final: false, duration: '—' },
];

// ============ EVENTOS ============
export const eventos = [
  { id: 'EVG-001', name: 'Atención médica con sospecha oncológica', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-002', name: 'Imagen con sospecha oncológica', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-003', name: 'Toma de biopsia', type: 'EVG', origin: 'Automatizado', codes: '801003/4/5/7/8', diagnosis: 'Todos' },
  { id: 'EVG-004', name: 'Confirmación oncológica', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-005', name: 'Descarte oncológico', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-006', name: 'Estudio de etapificación', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-007', name: 'Comité oncológico', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-008', name: 'Instalación de catéter', type: 'EVG', origin: 'Automatizado', codes: '1701037S', diagnosis: 'Todos' },
  { id: 'EVG-009', name: 'Trat. sistémico - Quimioterapia', type: 'EVG', origin: 'Automatizado', codes: '202507', diagnosis: 'Todos' },
  { id: 'EVG-010', name: 'Trat. sistémico - Hormonoterapia', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-011', name: 'Trat. sistémico - Terapias Dirigidas', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-012', name: 'Radioterapia', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-013', name: 'Atención Cuidados paliativos', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-014', name: 'Tratamiento - Otros', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-015', name: 'Inicio de seguimiento', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-016', name: 'Seguimiento - Oncología médica', type: 'EVG', origin: 'Automatizado', codes: '101211/108211', diagnosis: 'Todos' },
  { id: 'EVG-017', name: 'Sospecha de recaída/progresión (médica)', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-018', name: 'Sospecha de recaída/progresión (imagen)', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-019', name: 'Descarte de sospecha progresión/recaída', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-020', name: 'Confirmación de progresión/recaída', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-021', name: 'Fallecido', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-022', name: 'Traslado a otro establecimiento', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-023', name: 'Alta médica', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-025', name: 'Canasta GES-ISAPRE activada', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVG-026', name: 'PET CT', type: 'EVG', origin: 'Automatizado', codes: '501135', diagnosis: 'Todos' },
  { id: 'EVG-033', name: 'Rechazo de atención', type: 'EVG', origin: 'Manual', codes: 'Sin código', diagnosis: 'Todos' },
  { id: 'EVEMAMA-001', name: 'Trat. quirúrgico - Mastectomía', type: 'EVEMAMA', origin: 'Automatizado', codes: '2002003DP', diagnosis: 'C50' },
  { id: 'EVEMAMA-002', name: 'Trat. quirúrgico - Disección ganglionar', type: 'EVEMAMA', origin: 'Automatizado', codes: '1703036DP', diagnosis: 'C50' },
  { id: 'EVEMAMA-003', name: 'Seguimiento - Mamografía', type: 'EVEMAMA', origin: 'Automatizado', codes: 'R401010MB', diagnosis: 'C50' },
  { id: 'EVEMAMA-004', name: 'Seguimiento - Ecografía mamaria', type: 'EVEMAMA', origin: 'Automatizado', codes: 'R404012', diagnosis: 'C50' },
  { id: 'EVEMAMA-005', name: 'RNM mama', type: 'EVEMAMA', origin: 'Automatizado', codes: '405031', diagnosis: 'C50' },
];

// ============ CASOS ONCOLÓGICOS ============
export const cases = [
  {
    id: 'CO-2024-001', rut: '12.345.678-9', patient: 'Ana María Rojas Pérez',
    age: 52, prevision: 'FONASA', cie10: 'C50.4', cancer: 'Mama',
    state: 'EST-05', stateName: 'En tratamiento', stateDate: '2024-06-15',
    alertLevel: 'Al día', gesAlert: 'Al día', createdAt: '2024-03-10',
    lastEvent: '2024-07-01', navigator: 'María González',
    cieo3: '8500/3', diagnosisDate: '2024-04-05', tnm: 'T2N1M0', staging: 'IIB',
  },
  {
    id: 'CO-2024-002', rut: '9.876.543-2', patient: 'Rosa Elena Martínez López',
    age: 64, prevision: 'ISAPRE', cie10: 'C50.2', cancer: 'Mama',
    state: 'EST-03', stateName: 'Etapificación', stateDate: '2024-06-28',
    alertLevel: 'Por vencer', gesAlert: 'Al día', createdAt: '2024-05-20',
    lastEvent: '2024-06-28', navigator: 'María González',
    cieo3: '8520/3', diagnosisDate: '2024-06-10', tnm: '', staging: '',
  },
  {
    id: 'CO-2024-003', rut: '15.432.109-K', patient: 'Francisca Paz Soto Díaz',
    age: 45, prevision: 'FONASA', cie10: 'C50.9', cancer: 'Mama',
    state: 'EST-01', stateName: 'Sospecha', stateDate: '2024-07-02',
    alertLevel: 'Vencida', gesAlert: 'Por vencer', createdAt: '2024-07-02',
    lastEvent: '2024-07-02', navigator: 'María González',
    cieo3: '', diagnosisDate: '', tnm: '', staging: '',
  },
  {
    id: 'CO-2024-004', rut: '18.765.432-1', patient: 'Carolina Andrea Vega Ruiz',
    age: 38, prevision: 'FONASA', cie10: 'C50.1', cancer: 'Mama',
    state: 'EST-06', stateName: 'En seguimiento', stateDate: '2024-04-20',
    alertLevel: 'Al día', gesAlert: 'Al día', createdAt: '2024-01-15',
    lastEvent: '2024-06-15', navigator: 'Carmen Silva',
    cieo3: '8501/3', diagnosisDate: '2024-02-10', tnm: 'T1N0M0', staging: 'IA',
  },
  {
    id: 'CO-2024-005', rut: '11.222.333-4', patient: 'Valentina Isabel Herrera Muñoz',
    age: 57, prevision: 'ISAPRE', cie10: 'C50.3', cancer: 'Mama',
    state: 'EST-04', stateName: 'Plan de atención definido', stateDate: '2024-06-30',
    alertLevel: 'Al día', gesAlert: 'Por vencer', createdAt: '2024-04-01',
    lastEvent: '2024-06-30', navigator: 'María González',
    cieo3: '8500/3', diagnosisDate: '2024-04-28', tnm: 'T3N2M0', staging: 'IIIA',
  },
  {
    id: 'CO-2024-006', rut: '14.555.666-7', patient: 'Marcela Alejandra Castro Bravo',
    age: 61, prevision: 'FONASA', cie10: 'C50.5', cancer: 'Mama',
    state: 'EST-02', stateName: 'Diagnóstico', stateDate: '2024-07-01',
    alertLevel: 'Al día', gesAlert: 'Al día', createdAt: '2024-06-01',
    lastEvent: '2024-07-01', navigator: 'Carmen Silva',
    cieo3: '8503/3', diagnosisDate: '2024-07-01', tnm: '', staging: '',
  },
  {
    id: 'CO-2024-007', rut: '16.888.999-0', patient: 'Lorena Beatriz Figueroa Parra',
    age: 49, prevision: 'FONASA', cie10: 'C50.8', cancer: 'Mama',
    state: 'EST-07', stateName: 'Sospecha de progresión/recaída', stateDate: '2024-06-25',
    alertLevel: 'Vencida', gesAlert: 'Al día', createdAt: '2023-09-10',
    lastEvent: '2024-06-25', navigator: 'María González',
    cieo3: '8500/3', diagnosisDate: '2023-10-15', tnm: 'T2N0M0', staging: 'IIA',
  },
  {
    id: 'CO-2024-008', rut: '13.444.555-6', patient: 'Daniela Paz Reyes Contreras',
    age: 55, prevision: 'ISAPRE', cie10: 'C50.4', cancer: 'Mama',
    state: 'EST-09', stateName: 'Fallecido', stateDate: '2024-05-10',
    alertLevel: '—', gesAlert: '—', createdAt: '2023-06-20',
    lastEvent: '2024-05-10', navigator: 'María González',
    cieo3: '8500/3', diagnosisDate: '2023-07-15', tnm: 'T4N3M1', staging: 'IV',
  },
  {
    id: 'CO-2024-009', rut: '17.111.222-3', patient: 'Sofía Macarena Rivas Tapia',
    age: 42, prevision: 'FONASA', cie10: 'C50.2', cancer: 'Mama',
    state: 'EST-05', stateName: 'En tratamiento', stateDate: '2024-06-01',
    alertLevel: 'Por vencer', gesAlert: 'Al día', createdAt: '2024-02-28',
    lastEvent: '2024-06-20', navigator: 'Carmen Silva',
    cieo3: '8500/3', diagnosisDate: '2024-03-20', tnm: 'T2N1M0', staging: 'IIB',
  },
  {
    id: 'CO-2024-010', rut: '10.999.888-7', patient: 'Teresa del Carmen Morales Jara',
    age: 68, prevision: 'FONASA', cie10: 'C50.6', cancer: 'Mama',
    state: 'EST-10', stateName: 'Descartado', stateDate: '2024-06-15',
    alertLevel: '—', gesAlert: '—', createdAt: '2024-05-30',
    lastEvent: '2024-06-15', navigator: 'María González',
    cieo3: '', diagnosisDate: '', tnm: '', staging: '',
  },
];

// ============ EVENTOS POR CASO ============
export const caseEvents = {
  'CO-2024-001': [
    { id: 1, eventId: 'EVG-009', name: 'Trat. sistémico - Quimioterapia', date: '2024-07-01', registerDate: '2024-07-01', origin: 'SAP', user: 'Sistema' },
    { id: 2, eventId: 'EVG-007', name: 'Comité oncológico', date: '2024-06-15', registerDate: '2024-06-15', origin: 'Manual', user: 'María González' },
    { id: 3, eventId: 'EVG-006', name: 'Estudio de etapificación', date: '2024-05-20', registerDate: '2024-05-20', origin: 'Manual', user: 'María González' },
    { id: 4, eventId: 'EVG-004', name: 'Confirmación oncológica', date: '2024-04-05', registerDate: '2024-04-05', origin: 'Manual', user: 'María González' },
    { id: 5, eventId: 'EVG-003', name: 'Toma de biopsia', date: '2024-03-25', registerDate: '2024-03-26', origin: 'SAP', user: 'Sistema' },
    { id: 6, eventId: 'EVG-001', name: 'Atención médica con sospecha oncológica', date: '2024-03-10', registerDate: '2024-03-10', origin: 'Manual', user: 'María González' },
  ],
  'CO-2024-003': [
    { id: 1, eventId: 'EVG-001', name: 'Atención médica con sospecha oncológica', date: '2024-07-02', registerDate: '2024-07-02', origin: 'Manual', user: 'María González' },
  ],
};

// ============ ALERTAS ============
export const alerts = [
  { id: 1, caseId: 'CO-2024-003', alertCode: 'AL-01', name: 'Sospecha oncológica', event: 'EVG-001', startDate: '2024-07-02', deadline: '2024-07-04', level: 'Vencida', managed: false, reprogramCount: 0 },
  { id: 2, caseId: 'CO-2024-002', alertCode: 'AL-04', name: 'Estudio de etapificación', event: 'EVG-006', startDate: '2024-06-28', deadline: '2024-07-08', level: 'Por vencer', managed: true, reprogramCount: 0 },
  { id: 3, caseId: 'CO-2024-007', alertCode: 'AL-13', name: 'Sospecha de recaída', event: 'EVG-017', startDate: '2024-06-25', deadline: '2024-06-27', level: 'Vencida', managed: false, reprogramCount: 0 },
  { id: 4, caseId: 'CO-2024-001', alertCode: 'AL-08', name: 'Otros tratamientos', event: 'EVG-009', startDate: '2024-07-01', deadline: '2024-07-31', level: 'Al día', managed: false, reprogramCount: 0 },
  { id: 5, caseId: 'CO-2024-009', alertCode: 'AL-08', name: 'Otros tratamientos', event: 'EVG-009', startDate: '2024-06-20', deadline: '2024-07-20', level: 'Por vencer', managed: false, reprogramCount: 1 },
  { id: 6, caseId: 'CO-2024-005', alertCode: 'AL-05', name: 'Comité oncológico', event: 'EVG-007', startDate: '2024-06-30', deadline: '2024-07-07', level: 'Al día', managed: false, reprogramCount: 0 },
];

// ============ ALERTAS GES ============
export const gesAlerts = [
  { id: 1, caseId: 'CO-2024-003', guarantee: 'GO-1', name: 'Confirmación diagnóstica', startDate: '2024-07-02', deadline: '2024-08-16', level: 'Por vencer', closedBy: 'EVG-004 o EVG-005' },
  { id: 2, caseId: 'CO-2024-005', guarantee: 'GO-3', name: 'Inicio de tratamiento', startDate: '2024-05-15', deadline: '2024-06-14', level: 'Por vencer', closedBy: 'Primer evento de tratamiento' },
  { id: 3, caseId: 'CO-2024-002', guarantee: 'GO-2', name: 'Etapificación', startDate: '2024-06-10', deadline: '2024-07-25', level: 'Al día', closedBy: 'EVG-006' },
];

// ============ COLA DE ASIGNACIÓN ============
export const assignmentQueue = [
  { id: 1, rut: '12.345.678-9', patient: 'Ana María Rojas Pérez', eventId: 'EVG-016', eventName: 'Seguimiento - Oncología médica', eventDate: '2024-07-03', sapCode: '101211', activeCases: ['CO-2024-001'], status: 'Pendiente' },
  { id: 2, rut: '18.765.432-1', patient: 'Carolina Andrea Vega Ruiz', eventId: 'EVEMAMA-003', eventName: 'Seguimiento - Mamografía', eventDate: '2024-07-02', sapCode: 'R401010MB', activeCases: ['CO-2024-004'], status: 'Pendiente' },
  { id: 3, rut: '11.222.333-4', patient: 'Valentina Isabel Herrera Muñoz', eventId: 'EVG-009', eventName: 'Trat. sistémico - Quimioterapia', eventDate: '2024-07-01', sapCode: '202507', activeCases: ['CO-2024-005'], status: 'Pendiente' },
  { id: 4, rut: '9.876.543-2', patient: 'Rosa Elena Martínez López', eventId: 'EVG-003', eventName: 'Toma de biopsia', eventDate: '2024-07-04', sapCode: '801003', activeCases: ['CO-2024-002'], status: 'Pendiente' },
];

// ============ NOTAS CLÍNICAS ============
export const clinicalNotes = {
  'CO-2024-001': [
    { id: 1, text: 'Paciente refiere buena tolerancia al primer ciclo de quimioterapia. Se programa siguiente sesión para el 15/07.', user: 'María González', date: '2024-07-01 14:30' },
    { id: 2, text: 'Comité oncológico define esquema de tratamiento: QT neoadyuvante 4 ciclos AC + 4 ciclos Taxol, seguido de cirugía.', user: 'María González', date: '2024-06-15 11:00' },
    { id: 3, text: 'Resultado de biopsia confirma carcinoma ductal infiltrante, grado 2, RE+/RP+, HER2-.', user: 'María González', date: '2024-04-05 09:15' },
  ],
};

// ============ AUDITORÍA ============
export const auditLog = [
  { id: 1, date: '2024-07-04 09:30', user: 'Sistema', action: 'Evento recibido', entity: 'Evento', entityId: 'CO-2024-001', detail: 'Evento EVG-016 recibido desde SAP para caso CO-2024-001' },
  { id: 2, date: '2024-07-03 16:45', user: 'María González', action: 'Nota creada', entity: 'Nota', entityId: 'CO-2024-003', detail: 'Se registró nota clínica en caso CO-2024-003' },
  { id: 3, date: '2024-07-03 14:20', user: 'María González', action: 'Evento registrado', entity: 'Evento', entityId: 'CO-2024-002', detail: 'Registro manual de EVG-006 (Estudio de etapificación)' },
  { id: 4, date: '2024-07-02 10:00', user: 'María González', action: 'Caso creado', entity: 'Caso', entityId: 'CO-2024-003', detail: 'Nuevo caso oncológico para RUT 15.432.109-K' },
  { id: 5, date: '2024-07-01 11:30', user: 'Sistema', action: 'Cambio de estado', entity: 'Caso', entityId: 'CO-2024-001', detail: 'Transición EST-04 → EST-05 por evento EVG-009' },
  { id: 6, date: '2024-07-01 11:30', user: 'Sistema', action: 'Evento recibido', entity: 'Evento', entityId: 'CO-2024-001', detail: 'Evento EVG-009 recibido desde SAP' },
  { id: 7, date: '2024-06-30 15:00', user: 'María González', action: 'Evento registrado', entity: 'Evento', entityId: 'CO-2024-005', detail: 'Registro manual de EVG-007 (Comité oncológico)' },
  { id: 8, date: '2024-06-28 09:00', user: 'Roberto Díaz', action: 'Catálogo actualizado', entity: 'Catálogo', entityId: 'AL-08', detail: 'Plazo de alerta AL-08 modificado de 25 a 30 días' },
  { id: 9, date: '2024-06-25 14:00', user: 'María González', action: 'Alerta gestionada', entity: 'Alerta', entityId: 'CO-2024-007', detail: 'Gestión registrada: Paciente contactada, se agenda control médico' },
  { id: 10, date: '2024-06-20 10:30', user: 'Patricia Muñoz', action: 'Evento registrado', entity: 'Evento', entityId: 'CO-2024-005', detail: 'Registro de EVG-025 (Canasta GES-ISAPRE activada)' },
];

// ============ MONITOR INTEGRACIÓN ============
export const integrationMessages = [
  { id: 1, direction: 'SAP → Sistema', date: '2024-07-04 09:30', type: 'Evento', caseId: 'CO-2024-001', status: 'Recibido', detail: 'Prestación 101211 - Oncología médica', retries: 0 },
  { id: 2, direction: 'SAP → Sistema', date: '2024-07-03 08:15', type: 'Evento', caseId: 'CO-2024-004', status: 'Recibido', detail: 'Prestación R401010MB - Mamografía', retries: 0 },
  { id: 3, direction: 'Sistema → SAP', date: '2024-07-02 10:05', type: 'Caso creado', caseId: 'CO-2024-003', status: 'Enviado', detail: 'Notificación de nuevo caso - Estado Activo', retries: 0 },
  { id: 4, direction: 'SAP → Sistema', date: '2024-07-01 11:28', type: 'Evento', caseId: 'CO-2024-001', status: 'Recibido', detail: 'Prestación 202507 - Quimioterapia', retries: 0 },
  { id: 5, direction: 'Sistema → SAP', date: '2024-06-15 16:00', type: 'Caso cerrado', caseId: 'CO-2024-010', status: 'Enviado', detail: 'Notificación cierre - Estado Cerrado', retries: 0 },
  { id: 6, direction: 'SAP → Sistema', date: '2024-06-14 07:45', type: 'Evento', caseId: 'CO-2024-009', status: 'Error', detail: 'Prestación no mapeada en catálogo (código 999999)', retries: 2 },
  { id: 7, direction: 'Sistema → SAP', date: '2024-05-10 12:00', type: 'Caso cerrado', caseId: 'CO-2024-008', status: 'Enviado', detail: 'Notificación cierre por fallecimiento', retries: 0 },
];

// ============ DIAGNÓSTICOS CIE-10 ============
export const diagnosticsCIE10 = [
  { code: 'C50.0', name: 'Tumor maligno del pezón y areola', cancerType: 'Mama', prefix: 'EVEMAMA' },
  { code: 'C50.1', name: 'Tumor maligno de la porción central de la mama', cancerType: 'Mama', prefix: 'EVEMAMA' },
  { code: 'C50.2', name: 'Tumor maligno del cuadrante superior interno de la mama', cancerType: 'Mama', prefix: 'EVEMAMA' },
  { code: 'C50.3', name: 'Tumor maligno del cuadrante inferior interno de la mama', cancerType: 'Mama', prefix: 'EVEMAMA' },
  { code: 'C50.4', name: 'Tumor maligno del cuadrante superior externo de la mama', cancerType: 'Mama', prefix: 'EVEMAMA' },
  { code: 'C50.5', name: 'Tumor maligno del cuadrante inferior externo de la mama', cancerType: 'Mama', prefix: 'EVEMAMA' },
  { code: 'C50.6', name: 'Tumor maligno de la prolongación axilar de la mama', cancerType: 'Mama', prefix: 'EVEMAMA' },
  { code: 'C50.8', name: 'Lesión de sitios contiguos de la mama', cancerType: 'Mama', prefix: 'EVEMAMA' },
  { code: 'C50.9', name: 'Tumor maligno de la mama, sin otra especificación', cancerType: 'Mama', prefix: 'EVEMAMA' },
];

// ============ TIPOS DE CÁNCER ============
export const cancerTypes = [
  { id: 'CA_MAMA', name: 'Cáncer de mama', cie10Prefix: 'C50', eventPrefix: 'EVEMAMA', active: true },
];

// ============ CATÁLOGO DE ALERTAS ============
export const alertsCatalog = [
  { id: 'AL-01', name: 'Sospecha oncológica', event: 'EVG-001/002', days: 2, threshold: '70%', thresholdDay: 2 },
  { id: 'AL-02', name: 'Toma de biopsia', event: 'EVG-003', days: 7, threshold: '70%', thresholdDay: 5 },
  { id: 'AL-03', name: 'Confirmación oncológica', event: 'EVG-004', days: 10, threshold: '70%', thresholdDay: 7 },
  { id: 'AL-04', name: 'Estudio de etapificación', event: 'EVG-006', days: 10, threshold: '70%', thresholdDay: 7 },
  { id: 'AL-05', name: 'Comité oncológico', event: 'EVG-007', days: 7, threshold: '70%', thresholdDay: 5 },
  { id: 'AL-06', name: 'Instalación de catéter', event: 'EVG-008', days: 5, threshold: '70%', thresholdDay: 4 },
  { id: 'AL-07', name: 'Tratamiento quirúrgico', event: 'EVEMAMA-001/002', days: 20, threshold: '70%', thresholdDay: 14 },
  { id: 'AL-08', name: 'Otros tratamientos', event: 'EVG-009/011/012/014', days: 30, threshold: '70%', thresholdDay: 21 },
  { id: 'AL-09', name: 'Hormonoterapia', event: 'EVG-010', days: 180, threshold: '70%', thresholdDay: 126 },
  { id: 'AL-10', name: 'Cuidados paliativos', event: 'EVG-013', days: 20, threshold: '70%', thresholdDay: 14 },
  { id: 'AL-11', name: 'Inicio de seguimiento', event: 'EVG-015', days: 90, threshold: '70%', thresholdDay: 63 },
  { id: 'AL-12', name: 'Control de seguimiento', event: 'EVG-016/EVEMAMA-003/004', days: 180, threshold: '70%', thresholdDay: 126 },
  { id: 'AL-13', name: 'Sospecha de recaída', event: 'EVG-017/018', days: 2, threshold: '70%', thresholdDay: 2 },
  { id: 'AL-14', name: 'Confirmación de recaída', event: 'EVG-020', days: 10, threshold: '70%', thresholdDay: 7 },
  { id: 'AL-15', name: 'Canasta GES-ISAPRE', event: 'EVG-025', days: 0, threshold: '—', thresholdDay: 0 },
];
