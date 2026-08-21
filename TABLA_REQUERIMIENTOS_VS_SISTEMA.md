# Tabla de Trazabilidad: Requerimientos del Documento vs Sistema (Mockup)
## Sistema de Navegación Oncológica — Clínica Alemana de Osorno

---

## TABLA 1: Requerimientos Funcionales — Qué probar y dónde

| ID | Nombre | Pantalla en el Sistema | Acciones para verificar cumplimiento | Datos de prueba |
|----|--------|----------------------|--------------------------------------|-----------------|
| **RF-001** | Registrar caso oncológico | Agregar Nuevo Caso (wizard) | 1. Click "+ Nuevo Caso" desde Listado o Búsqueda. 2. Paso 1: buscar paciente por RUT. 3. Paso 2: seleccionar CIE-10, GES, fecha, navegadora. 4. Paso 3: seleccionar evento de ingreso y fecha. 5. Paso 4: confirmar resumen → se genera caso con estado inicial y se notifica a SAP. | RUT: 15.432.109-K, CIE-10: C50.9, Evento: EVG-001 |
| **RF-002** | Registrar evento clínico manual | Detalle del Caso → Botón "Registrar Evento" | 1. Abrir caso CO-2024-001. 2. Click "+ Registrar Evento". 3. Seleccionar evento del catálogo (ej: EVG-007). 4. Ingresar fecha del evento (obligatorio). 5. Confirmar registro → evento aparece en historial. | Caso CO-2024-001, Evento EVG-007 |
| **RF-003** | Registrar evento clínico automático desde SAP | Cola de Asignación + Monitor de Integración | 1. Ir a Cola de Asignación → verificar eventos recibidos desde SAP (badge "SAP"). 2. Ir a Monitor de Integración → verificar mensajes SAP→Sistema con status "Recibido". 3. En Detalle de Caso, ver eventos con origen "SAP" en historial. | Cola: EVG-016 para CO-2024-001 |
| **RF-004** | Gestionar cola de asignación de eventos | Cola de Asignación | 1. Click "Cola de Asignación" en sidebar (badge 4). 2. Ver 4 ítems pendientes con datos del evento, paciente, caso(s) activo(s). 3. Click "Confirmar" → modal de confirmación. 4. Click "Descartar" → requiere motivo obligatorio. | Confirmar EVG-016 a CO-2024-001; Descartar con motivo |
| **RF-005** | Visualizar evolución y estado del caso | Detalle del Caso (todas las tabs) | 1. Abrir CO-2024-001. 2. Verificar estado actual, historial de eventos (tab Eventos), transiciones (tab Trazabilidad). 3. Cada evento muestra origen, fecha ocurrencia y fecha registro. | Caso CO-2024-001 |
| **RF-006** | Visualizar y dar seguimiento a alertas | Listado de Casos + Dashboard | 1. En Listado de Casos: verificar columna "Alerta" con semáforo (Al día/Por vencer/Vencida). 2. En Dashboard: ver KPI "Alertas Vencidas" y "Alertas Por Vencer". 3. En Gestión de Alertas: ver bandeja completa. | Filtrar por "Vencida" en listado |
| **RF-007** | Registrar evento canasta GES-ISAPRE | Detalle del Caso → Registrar Evento | 1. Abrir caso de paciente ISAPRE (CO-2024-005, Valentina). 2. Click "Registrar Evento". 3. Seleccionar EVG-025 "Canasta GES-ISAPRE activada". 4. Confirmar → no genera cambio de estado. | Caso CO-2024-005, EVG-025 |
| **RF-009** | Gestionar usuarios y roles | Administración → Usuarios | 1. Ir a Administración → Usuarios. 2. Verificar tabla con 5 usuarios, 3 roles. 3. Verificar botón "+ Nuevo Usuario". 4. Verificar botones Editar (lápiz) y Desactivar (ícono). 5. Verificar usuario inactivo (Claudia Fernández). | — |
| **RF-010** | Aplicar seguridad y restricciones por rol | Administración → Roles y Permisos | 1. Ir a Roles y Permisos. 2. Verificar matriz 15 permisos × 3 roles. 3. Verificar que Navegadora NO tiene permisos admin. 4. Verificar que GES solo tiene EVG-025 y visualización. 5. Verificar que Admin tiene todos los permisos. | — |
| **RF-011** | Administrar catálogo de tipos de cáncer | Administración → Diagnósticos CIE-10 | 1. Ir a Diagnósticos CIE-10. 2. Verificar tabla "Tipos de Cáncer": CA_MAMA activo, prefijo C50, EVEMAMA. 3. Verificar que soporta agregar nuevos tipos (botón presente). | — |
| **RF-012** | Administrar catálogo de prestaciones SAP y eventos | Administración → Eventos Clínicos | 1. Ir a Eventos Clínicos. 2. Verificar ~30 eventos con: ID, nombre, tipo (EVG/EVEMAMA), origen (Manual/Automatizado), código SAP, diagnóstico. 3. Filtrar por tipo EVEMAMA → 5 resultados. 4. Buscar "Quimioterapia" → EVG-009. | Filtro: EVEMAMA; Búsqueda: "biopsia" |
| **RF-013** | Configurar plazos y umbrales del motor de alertas | Administración → Alertas y Plazos | 1. Ir a Alertas y Plazos. 2. Verificar 15 alertas (AL-01 a AL-15) con: código, nombre, evento que abre, plazo (días), umbral 70%, día alerta. 3. Verificar sección Alertas GES (AL-GES-1 a AL-GES-5) con plazos y condiciones de cierre. | AL-01: 2 días; AL-09: 180 días; AL-15: 0 días (nace vencida) |
| **RF-014** | Visualizar dashboard operativo | Dashboard (Home) | 1. Verificar 4 KPIs: Alertas Vencidas (2), Por Vencer (2), Casos Activos (8), Pendientes Asignación (4). 2. Verificar sección Cumplimiento GES (GO-1, GO-2, GO-3). 3. Verificar "Alertas que requieren acción" priorizado. 4. Verificar "Distribución de Casos por Estado". 5. Verificar accesos directos (links). | — |
| **RF-015** | Visualizar y gestionar bandeja de casos | Listado de Casos | 1. Verificar tabla con 10 casos paginados. 2. Verificar columnas: ID, Paciente, RUT, Diagnóstico, Estado, Alerta, GES, Último Evento. 3. Probar búsqueda por nombre ("Ana"), RUT ("12345678-9"), ID ("CO-2024"). 4. Probar filtro por estado y nivel de alerta. 5. Verificar botón Exportar. 6. Click ojo → va a Detalle. | Búsqueda: "12345678-9" |
| **RF-016** | Registrar y consultar notas clínicas | Detalle del Caso → Tab Notas Clínicas | 1. Abrir CO-2024-001. 2. Click tab "Notas Clínicas". 3. Verificar 3 notas existentes con texto, autor, fecha/hora. 4. Verificar orden descendente (más reciente arriba). 5. Verificar área de texto para nueva nota. 6. Verificar botón "+ Nueva Nota". | Caso CO-2024-001 |
| **RF-017** | Consultar historial de casos del mismo paciente | Detalle del Caso → Tab Historial Casos | 1. Abrir un caso. 2. Click tab "Historial Casos". 3. Verificar que muestra otros casos del mismo RUT (activos y cerrados). 4. Si no tiene otros → mensaje "No existen otros casos". 5. Verificar link para navegar al otro caso. | — |
| **RF-018** | Consultar historial de eventos del caso | Detalle del Caso → Tab Eventos | 1. Abrir CO-2024-001. 2. Verificar 6 eventos ordenados del más reciente al más antiguo. 3. Cada evento muestra: código, nombre, fecha evento, fecha registro, origen (SAP/Manual), usuario. 4. Probar filtro: "Todos" / "Solo manuales" / "Solo automatizados". | Caso CO-2024-001 |
| **RF-019** | Visualizar trazabilidad de cambios de estado | Detalle del Caso → Tab Trazabilidad | 1. Abrir CO-2024-001. 2. Click tab "Trazabilidad". 3. Verificar timeline con solo estado + fecha (SIN nombre de evento ni usuario). 4. Estado actual marcado en azul. 5. Orden: más reciente arriba. | Caso CO-2024-001: Sospecha→Diagnóstico→Etapificación→Plan→En tratamiento |
| **RF-020** | Buscar paciente y consultar casos asociados | Búsqueda de Paciente | 1. Ir a Búsqueda de Paciente. 2. Ingresar "12345" o "12345678-9" → click Buscar. 3. Verificar datos demográficos (nombre, RUT, edad, previsión). 4. Verificar listado de casos asociados con estado y link a detalle. 5. Verificar botón "+ Nuevo Caso". | RUT: 12345678-9 (sin puntos funciona) |
| **RF-021** | Gestionar una alerta abierta | Gestión de Alertas → Panel lateral | 1. Ir a Gestión de Alertas. 2. Click en alerta AL-13 (Vencida). 3. Verificar panel lateral con datos de la alerta. 4. Verificar 4 acciones: Registrar Gestión, Reprogramar Fecha, Registrar Evento de Cierre, Cancelar Administrativamente. 5. Verificar campo motivo/nota. | Seleccionar AL-13 o AL-01 |
| **RF-022** | Registrar caso desde interfaz (flujo UI) | Agregar Nuevo Caso | (Mismo que RF-001) Verificar el flujo completo del wizard de 4 pasos con indicador visual de progreso, botones Anterior/Continuar, y resumen final con mensaje de notificación SAP. | — |
| **RF-023** | Administrar catálogo de estados clínicos | Administración → Estados | 1. Ir a Estados. 2. Verificar 13 estados (EST-01 a EST-13). 3. Verificar columnas: código, nombre, carácter (Activo/Cierre/Pausa), ¿Final?, duración esperada. 4. Verificar badges de color por carácter. | EST-09 Fallecido = Cierre, Final = Sí |
| **RF-024** | Consultar auditoría de acciones | Auditoría | 1. Ir a Auditoría. 2. Verificar 10 registros con: fecha/hora, usuario/origen, acción, entidad, detalle. 3. Verificar que es solo lectura (no hay botones de editar/eliminar). 4. Probar filtro por acción ("Caso creado"). 5. Probar búsqueda por usuario ("Sistema"). | Filtro: "Cambio de estado"; Búsqueda: "Roberto" |
| **RF-025** | Iniciar sesión en el sistema | Login | 1. Abrir URL del sistema. 2. Verificar logo Clínica Alemana, campos correo/contraseña. 3. Click "Ingresar" → accede al Dashboard. 4. Verificar texto "Sistema de uso exclusivo para personal autorizado". | Correo: maria.gonzalez@clinica.cl |
| **RF-026** | Administrar catálogo de diagnósticos CIE-10 | Administración → Diagnósticos CIE-10 | 1. Ir a Diagnósticos CIE-10. 2. Verificar 9 códigos (C50.0 a C50.9) con: código, descripción, tipo cáncer, prefijo eventos (EVEMAMA). 3. Verificar botón "+ Nuevo Diagnóstico". | C50.4 = "Tumor maligno cuadrante superior externo" |
| **RF-027** | Administrar perfil de usuario (Mi perfil) | Mi Perfil | 1. Click ícono usuario en sidebar. 2. Verificar nombre, correo (editables). 3. Verificar rol (no editable, gris). 4. Verificar sección cambiar contraseña (actual, nueva, confirmar). 5. Verificar botón "Guardar Cambios". | María González, Enfermera Navegadora |
| **RF-028** | Visualizar cumplimiento de Garantías GES | Dashboard → Sección Cumplimiento GES | 1. En Dashboard, verificar sección "Cumplimiento GES" separada. 2. Verificar 3 alertas GES con garantía (GO-1, GO-2, GO-3), caso, fecha vencimiento y nivel. 3. Verificar que es independiente del listado de alertas operativas. | GO-1 CO-2024-003 Por vencer; GO-3 CO-2024-005 Por vencer |
| **RF-029** | Visualizar y administrar roles y permisos | Administración → Roles y Permisos | 1. Ir a Roles y Permisos. 2. Verificar 3 cards con nombre y descripción del rol. 3. Verificar "Matriz de Permisos": 15 filas × 3 columnas. 4. Verificar checks (✓ verde) y cruces (✕ gris). | "Gestionar usuarios" = solo Admin |
| **RF-030** | Monitor de integración con SAP | Monitor de Integración | 1. Ir a Monitor de Integración. 2. Verificar KPIs: 6 exitosos, 1 error, 7 total. 3. Verificar tabla con: fecha, dirección (SAP→Sistema / Sistema→SAP), tipo, caso, detalle, estado, reintentos. 4. Verificar mensaje con error (2 reintentos, código 999999). | Mensaje error: CO-2024-009 |

---

## Requerimientos No Funcionales — Verificación en Mockup

| ID | Requisito | Cómo se verifica en el mockup | Observación |
|----|-----------|-------------------------------|-------------|
| **RNF-01** | Usuarios totales: 3-10 | Administración → Usuarios: tabla muestra 5 usuarios | ✅ Dentro del rango |
| **RNF-02** | Usuarios concurrentes: 7 | N/A en mockup (es requisito de infraestructura) | ⚙️ Se valida en pruebas de carga |
| **RNF-03** | Casos activos: diseñar para 3.000+ | Listado de Casos soporta paginación y filtros | ✅ Diseño preparado |
| **RNF-04** | Ambientes: QA + Producción | N/A en mockup | ⚙️ Infraestructura |
| **RNF-05** | Disponibilidad: L-V 07:00-20:00 | N/A en mockup | ⚙️ Infraestructura |
| **RNF-06** | Respaldo diario (02:00) | N/A en mockup | ⚙️ Infraestructura |
| **RNF-07** | Cifrado de datos en BD | N/A en mockup | ⚙️ Desarrollo backend |
| **RNF-08** | Trazabilidad y auditoría | Pantalla Auditoría: log solo lectura con todas las acciones | ✅ Pantalla implementada |
| **RNF-09** | Mensajes de error comprensibles | Monitor de Integración muestra errores con detalle legible | ✅ Visible en UI |

---

## TABLA 2: Modelo de Estados y Transiciones (Caps. 10, 11, 12, 13 del documento)

### 2.1 — Catálogo completo de estados (Cap. 10)

| Código | Estado | Carácter | ¿Final? | Pantalla de verificación | Cómo verificar |
|--------|--------|----------|---------|--------------------------|----------------|
| EST-01 | Sospecha | Activo | No | Admin → Estados + Listado (caso CO-2024-003) | Badge "Sospecha" en listado; en Admin ver carácter "Activo" |
| EST-02 | Diagnóstico | Activo | No | Admin → Estados + Listado (caso CO-2024-006) | Badge "Diagnóstico" en listado |
| EST-03 | Etapificación | Activo | No | Admin → Estados + Listado (caso CO-2024-002) | Badge "Etapificación" en listado |
| EST-04 | Plan de atención definido | Activo | No | Admin → Estados + Listado (caso CO-2024-005) | Badge "Plan de atención definido" |
| EST-05 | En tratamiento | Activo | No | Admin → Estados + Listado (caso CO-2024-001) | Badge "En tratamiento"; Trazabilidad muestra la progresión |
| EST-06 | En seguimiento | Activo | No | Admin → Estados + Listado (caso CO-2024-004) | Badge "En seguimiento" |
| EST-07 | Sospecha de progresión/recaída | Activo | No | Admin → Estados + Listado (caso CO-2024-007) | Badge "Sospecha de progresión/recaída" |
| EST-08 | Confirmación de progresión/recaída | Activo | No | Admin → Estados | Verificar en catálogo, carácter Activo |
| EST-09 | Fallecido | Cierre | Sí | Admin → Estados + Listado (caso CO-2024-008) | Badge "Fallecido"; Alerta = "—" (sin alertas) |
| EST-10 | Descartado | Cierre | Sí | Admin → Estados + Listado (caso CO-2024-010) | Badge "Descartado"; Alerta = "—" |
| EST-11 | Inactivo por traslado | Pausa | No | Admin → Estados | Badge amarillo "Pausa" en catálogo |
| EST-12 | Alta médica | Cierre | Sí | Admin → Estados | Verificar carácter "Cierre" y Final = Sí |
| EST-13 | Rechazo de atención | Activo | No | Admin → Estados | Verificar en catálogo |

### 2.2 — Reglas de transición principales (Cap. 11)

| Regla | Descripción del documento | Verificación en sistema |
|-------|---------------------------|------------------------|
| **RN-001** | Transición solo válida si está en la matriz. Toda transición no contemplada se rechaza. | Backend. En mockup: el catálogo de estados y transiciones está documentado en Admin → Estados. |
| **RN-004** | Evento específico con 1 caso → registro automático. Evento general → cola de asignación. Evento específico con 2+ casos → cola. | Cola de Asignación muestra eventos EVG (generales) pendientes. En Detalle de Caso, eventos SAP específicos aparecen registrados directamente. |
| **RN-005** | Prestaciones simultáneas: solo la de mayor jerarquía ejecuta cambio de estado. | Backend. Auditoría registra el evento ejecutor. |
| **RN-006** | "Fallecido" se puede registrar desde cualquier estado activo, tiene prioridad. | En Admin → Estados, EST-09 no es "Final=No" sino "Final=Sí". En Registrar Evento: EVG-021 siempre disponible. |
| **RN-007** | "Traslado" se puede registrar desde cualquier estado activo → Inactivo por traslado. | EVG-022 disponible para registro manual en cualquier momento. |
| **RN-008** | Eventos transversales (EVG-025 a EVG-031) no cambian estado. | En Detalle de Caso: estos eventos aparecen en historial sin transición asociada en Trazabilidad. |
| **RN-009** | En tratamiento: eventos adicionales de tratamiento no generan nuevo cambio de estado. | Historial muestra múltiples eventos de tratamiento pero Trazabilidad solo muestra 1 entrada a EST-05. |
| **RN-013** | Estados finales (Fallecido, Descartado, Alta médica): no admiten nuevas transiciones. | En listado: casos con estos estados no muestran alertas activas (Alerta = "—"). |
| **RN-037** | Evento cuya transición está bloqueada: se registra en historial con ícono distintivo, sin cambio de estado. | Backend + Historial de eventos (ícono visual). |
| **RN-039** | Inactivo por traslado (EST-11) NO es cierre: es Pausa. SAP sigue notificando. Cualquier evento posterior reactiva el caso. | Admin → Estados: EST-11 carácter = "Pausa", Final = No. |
| **RN-040** | El catálogo de eventos para registro manual NO se restringe por estado actual. | En Registrar Evento: todos los eventos del inventario están disponibles siempre. La validación aplica al confirmar (RN-037). |
| **RN-043** | Al registrar EVG-004: obligatorio ingresar CIEO3 y fecha de diagnóstico. | Detalle de Caso muestra CIEO3 (ej: 8500/3) y fecha diagnóstico. En formulario de registro: campos obligatorios. |
| **RN-044** | Al registrar EVG-007: opcional ingresar TNM y Estadio. | Detalle de Caso muestra TNM (ej: T2N1M0) y Estadio (ej: IIB). Campos opcionales. |
| **RN-045** | Cola de asignación: se puede descartar ítem con motivo obligatorio. | Cola de Asignación: botón "Descartar" → requiere motivo. Ítem desaparece de la cola. Disponible en Auditoría. |
| **RN-046** | Eventos automatizados (EVG-003, 008, 016, EVEMAMA-003/004): generan cambio de estado si la transición está habilitada. Si el caso ya está en estado posterior, se registra sin alterar estado. | Backend. En historial se ve el evento registrado sin cambio en Trazabilidad. |
| **RN-047** | Si primer tratamiento se registra antes de EVG-007, AL-GES-4 no se genera. | Backend (motor de alertas). |

### 2.3 — Transiciones documentadas por estado de origen (Cap. 11, Tabla de transiciones)

| Estado Origen | Destinos posibles (P=Permitido) | Evento disparador | Verificación en mockup |
|---------------|-------------------------------|-------------------|------------------------|
| **EST-01 Sospecha** | EST-02 (EVG-004), EST-03 (EVG-006), EST-04 (EVG-007/008), EST-05 (tratamientos), EST-06 (EVG-015), EST-09 (EVG-021), EST-10 (EVG-005), EST-11 (EVG-022), EST-13 (EVG-033) | Múltiples eventos | Caso CO-2024-003 está en Sospecha. En Trazabilidad de CO-2024-001 se ve la progresión desde Sospecha. |
| **EST-02 Diagnóstico** | EST-03 (EVG-006), EST-04 (EVG-007/008), EST-05 (tratamientos), EST-06 (EVG-015), EST-07 (EVG-017/018), EST-08 (EVG-020), EST-09 (EVG-021), EST-11 (EVG-022), EST-13 (EVG-033) | Múltiples | Caso CO-2024-006 está en Diagnóstico. |
| **EST-03 Etapificación** | EST-04 (EVG-007/008), EST-05 (tratamientos), EST-06 (EVG-015), EST-07 (EVG-017/018), EST-08 (EVG-020), EST-09 (EVG-021), EST-11 (EVG-022), EST-13 (EVG-033) | Múltiples | Caso CO-2024-002 está en Etapificación. |
| **EST-04 Plan atención** | EST-02 (EVG-004, condicionado), EST-05 (tratamientos), EST-06 (EVG-015), EST-07 (EVG-017/018, condicionado), EST-08 (EVG-020), EST-09 (EVG-021), EST-11 (EVG-022), EST-13 (EVG-033) | Múltiples | Caso CO-2024-005 está en Plan de atención. |
| **EST-05 En tratamiento** | EST-04 (EVG-007), EST-06 (EVG-015), EST-07 (EVG-017/018, condicionado), EST-08 (EVG-020, condicionado), EST-09 (EVG-021), EST-11 (EVG-022), EST-13 (EVG-033) | Múltiples | Casos CO-2024-001 y CO-2024-009 en tratamiento. |
| **EST-06 En seguimiento** | EST-02/03/04 (condicionado), EST-05 (tratamientos, condicionado), EST-07 (EVG-017/018), EST-08 (EVG-020), EST-09 (EVG-021), EST-11 (EVG-022), EST-12 (EVG-023), EST-13 (EVG-033) | Múltiples | Caso CO-2024-004 en seguimiento. |
| **EST-07 Sospecha progresión** | EST-02/03/04/05/06 (condicionado), EST-08 (EVG-020), EST-09 (EVG-021), EST-11 (EVG-022), EST-13 (EVG-033) | Múltiples | Caso CO-2024-007 en sospecha progresión. |
| **EST-08 Confirmación progresión** | EST-03/04/05/06 (condicionado), EST-09 (EVG-021), EST-11 (EVG-022), EST-13 (EVG-033) | Múltiples | Verificar en Admin → Estados. |
| **EST-09 Fallecido** | NINGUNO (estado final) | — | Caso CO-2024-008: alertas = "—", no se pueden registrar nuevos eventos de transición. |
| **EST-10 Descartado** | NINGUNO (estado final) | — | Caso CO-2024-010: alertas = "—". Solo accesible desde EST-01. |
| **EST-11 Inactivo traslado** | Cualquier estado activo (se reactiva con cualquier evento posterior) | Cualquier evento del catálogo | Admin → Estados: Pausa, no final. |
| **EST-12 Alta médica** | EST-09 (EVG-021, solo Fallecido) | EVG-021 | Estado final. Solo desde EST-06. |
| **EST-13 Rechazo de atención** | Cualquier estado activo (se reactiva con cualquier evento posterior) | Cualquier evento | Similar a EST-11: se reactiva. |

### 2.4 — Motor de Alertas: Plazos y umbrales (Cap. 12)

| ID Alerta | Evento que abre | Plazo | Umbral (70%) | Día alerta | Verificación en sistema |
|-----------|----------------|-------|--------------|------------|------------------------|
| AL-01 | EVG-001/002 (Sospecha) | 2 días | 70% | Día 2 | Admin → Alertas y Plazos. En Gestión de Alertas: AL-01 para CO-2024-003 = Vencida |
| AL-02 | EVG-003 (Biopsia) | 7 días | 70% | Día 5 | Admin → Alertas y Plazos |
| AL-03 | EVG-004 (Confirmación) | 10 días | 70% | Día 7 | Admin → Alertas y Plazos |
| AL-04 | EVG-006 (Etapificación) | 10 días | 70% | Día 7 | Gestión de Alertas: AL-04 para CO-2024-002 = Por vencer |
| AL-05 | EVG-007 (Comité) | 7 días | 70% | Día 5 | Gestión de Alertas: AL-05 para CO-2024-005 = Al día |
| AL-06 | EVG-008 (Catéter) | 5 días | 70% | Día 4 | Admin → Alertas y Plazos |
| AL-07 | EVEMAMA-001/002 (Quirúrgico) | 20 días | 70% | Día 14 | Admin → Alertas y Plazos |
| AL-08 | EVG-009/011/012/014 (Otros trat.) | 30 días | 70% | Día 21 | Gestión de Alertas: AL-08 para CO-2024-001 y CO-2024-009 |
| AL-09 | EVG-010 (Hormonoterapia) | 180 días | 70% | Día 126 | Admin → Alertas y Plazos |
| AL-10 | EVG-013 (Cuidados paliativos) | 20 días | 70% | Día 14 | Admin → Alertas y Plazos |
| AL-11 | EVG-015 (Inicio seguimiento) | 90 días | 70% | Día 63 | Admin → Alertas y Plazos |
| AL-12 | EVG-016/EVEMAMA-003/004 (Control) | 180 días | 70% | Día 126 | Admin → Alertas y Plazos |
| AL-13 | EVG-017/018 (Sospecha recaída) | 2 días | 70% | Día 2 | Gestión de Alertas: AL-13 para CO-2024-007 = Vencida |
| AL-14 | EVG-020 (Confirmación recaída) | 10 días | 70% | Día 7 | Admin → Alertas y Plazos |
| AL-15 | EVG-025 (Canasta GES-ISAPRE) | 0 días | — | Nace Vencida | Admin → Alertas y Plazos. Nota: RN-042 establece que nace directamente "Vencida". |

### 2.5 — Alertas GES (Cap. 12b)

| ID | Garantía | Evento que abre | Plazo GES | Condición de cierre | Verificación en sistema |
|----|----------|----------------|-----------|--------------------|-----------------------|
| AL-GES-1 | GO-1 | EVG-001/002 | 45 días | EVG-004 o EVG-005 | Dashboard → Cumplimiento GES: GO-1 para CO-2024-003 = Por vencer |
| AL-GES-2 | GO-2 | EVG-004 | 45 días | EVG-006 | Dashboard → Cumplimiento GES: GO-2 para CO-2024-002 = Al día |
| AL-GES-3 | GO-3 | EVG-006 | 30 días | Primer evento de tratamiento | Dashboard → Cumplimiento GES: GO-3 para CO-2024-005 = Por vencer |
| AL-GES-4 | GO-4 | EVG-007 | 20 días | Primer evento de tratamiento | Admin → Alertas y Plazos (tabla GES) |
| AL-GES-5 | GO-5 | Último evento tratamiento (se reinicia) | 90 días | EVG-015 | Admin → Alertas y Plazos (tabla GES). RN-036: reinicia con cada tratamiento. |

### 2.6 — Reglas del Motor de Alertas (Cap. 13)

| Regla | Descripción | Cómo se evidencia en el sistema |
|-------|-------------|--------------------------------|
| **RN-003** | La alerta se genera por un evento ya registrado, no por uno futuro. | Gestión de Alertas: cada alerta muestra el evento y fecha de inicio (ya ocurrido). |
| **RN-015** | No todos los eventos abren plazo/generan alerta. | Admin → Alertas y Plazos: solo 15 alertas definidas, no 30+ eventos. |
| **RN-016** | Generación y cierre de alerta son independientes del cambio de estado. | Se puede tener alerta Al día y estado que ya cambió, o alerta Vencida sin cambio de estado. |
| **RN-018** | Si hay más de una alerta abierta, un evento sucesor cierra TODAS las abiertas del caso. | Backend. En Gestión de Alertas se ven múltiples alertas por caso. |
| **RN-028** | Catálogo de tipos de gestión administrable. | Gestión de Alertas → panel con botón "Registrar Gestión". |
| **RN-029** | Registrar gestión NO cierra la alerta; solo la marca como gestionada. | Badge "Gestionada" (azul/gris) visible en AL-04 de Rosa Elena. La alerta sigue abierta. |
| **RN-030** | Reprogramación: conserva fecha original, exige motivo, sin límite, con contador. | Badge "Reprogramada ×1" visible en AL-08 de Sofía. Botón "Reprogramar Fecha" en panel. |
| **RN-031** | Formas de cierre: avance clínico, evento de cierre (Fallecido/Traslado/Rechazo/Alta/Descarte), cancelación administrativa. | Panel de Gestión: botones "Registrar Evento de Cierre" y "Cancelar Administrativamente". |
| **RN-032** | Priorización: Vencida sin gestión > Vencida en gestión > Por vencer > Al día. | Gestión de Alertas: orden de la bandeja cumple esta prioridad. |
| **RN-033** | Reintento "Paciente no contesta" ×3 → cierra alerta y crea nueva con plazo 1 mes. | Backend (motor de alertas). |
| **RN-034** | Alertas GES son independientes del motor operativo. | Dashboard muestra sección "Cumplimiento GES" SEPARADA de "Alertas que requieren acción". |
| **RN-038** | Umbral 70% con redondeo hacia arriba (techo). Ej: 70% de 7 = 4.9 → día 5. | Admin → Alertas y Plazos: AL-02 plazo 7, día alerta 5 (no 4). |
| **RN-041** | EVEMAMA-003/004 abren AL-12 SOLO si ya existe EVG-015 registrado. | Backend. |
| **RN-042** | AL-15 (Canasta GES-ISAPRE) nace directamente "Vencida" desde día 0. | Admin → Alertas: AL-15 plazo = 0. Requiere gestión inmediata. |

---

## Resumen de cobertura

| Sección del documento | Capítulos | Cubierto en mockup | Pantalla principal |
|-----------------------|-----------|--------------------|--------------------|
| Integración SAP | Cap. 1-3 | ✅ Monitor + Cola | Monitor de Integración, Cola de Asignación |
| Roles y permisos | Cap. 4 | ✅ Completo | Roles y Permisos, Usuarios |
| Modelo de estados | Cap. 10 | ✅ Catálogo + datos | Admin → Estados, Listado, Trazabilidad |
| Criterios de entrada/salida | Cap. 10b | ✅ Documentado | Admin → Estados |
| Matriz de transiciones | Cap. 11 | ⚙️ Backend (lógica) | Trazabilidad muestra resultado |
| Tabla de transiciones detallada | Cap. 11b | ⚙️ Backend (162 transiciones) | Historial de Eventos muestra las ejecutadas |
| Catálogo de eventos | Cap. 12 | ✅ Completo | Admin → Eventos Clínicos |
| Motor de alertas operativas | Cap. 13a | ✅ Catálogo + bandeja | Admin → Alertas, Gestión de Alertas |
| Alertas GES | Cap. 13b | ✅ Dashboard + catálogo | Dashboard → Cumplimiento GES |
| Gestión de alertas | Cap. 13c | ✅ Panel completo | Gestión de Alertas (panel lateral) |
| Reglas de negocio (RN) | Cap. 14 | Parcial (visual) | Múltiples pantallas |
| Requerimientos funcionales | Cap. 15 | ✅ 30/30 | Todas las pantallas |
| Requerimientos no funcionales | Cap. 16 | Parcial (infraestructura) | N/A para mockup |
| Pantallas/UI | Cap. 17 | ✅ 20/20 | Todas implementadas |
| Modelo de datos | Cap. 18 | ✅ Reflejado en UI | Campos visibles en formularios y detalle |

---

*Documento generado: Agosto 2026 — Trazabilidad Documento ↔ Sistema*
