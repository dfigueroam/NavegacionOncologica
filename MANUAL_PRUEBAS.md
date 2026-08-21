# Manual de Pruebas — Sistema de Navegación Oncológica
## Mockup Funcional v1.0 | Clínica Alemana de Osorno

---

## 📋 Información General

| Dato | Valor |
|------|-------|
| **URL de acceso** | https://dfigueroam.github.io/NavegacionOncologica/ |
| **Tipo** | Mockup funcional (sin base de datos, datos ficticios) |
| **Objetivo** | Validar flujos, diseño y pantallas del sistema antes del desarrollo |
| **Navegador recomendado** | Google Chrome / Microsoft Edge |

> **Nota importante:** Este es un prototipo de interfaz con datos ficticios. No requiere credenciales reales — presione "Ingresar" directamente. Los datos no se persisten entre sesiones.

---

## 👥 Usuarios de Prueba

El sistema tiene 3 roles. Para efectos del mockup, todos ingresan con el mismo botón "Ingresar" sin validación de credenciales.

| # | Nombre | Correo | Rol | Descripción |
|---|--------|--------|-----|-------------|
| 1 | María González | maria.gonzalez@clinica.cl | **Enfermera Navegadora** | Gestión completa de casos, eventos, alertas y cola de asignación |
| 2 | Patricia Muñoz | patricia.munoz@clinica.cl | **Enfermera GES** | Registro de canasta GES-ISAPRE (EVG-025) y visualización de casos |
| 3 | Roberto Díaz | roberto.diaz@clinica.cl | **Administrador** | Gestión de catálogos, usuarios, configuración del sistema |

---

## 🏥 Pacientes y Casos de Prueba

### Datos para búsqueda de pacientes

| Paciente | RUT | Edad | Previsión | Caso | Estado Actual | Alerta |
|----------|-----|------|-----------|------|---------------|--------|
| Ana María Rojas Pérez | 12.345.678-9 | 52 | FONASA | CO-2024-001 | En tratamiento | Al día |
| Rosa Elena Martínez López | 9.876.543-2 | 64 | ISAPRE | CO-2024-002 | Etapificación | Por vencer |
| Francisca Paz Soto Díaz | 15.432.109-K | 45 | FONASA | CO-2024-003 | Sospecha | **Vencida** |
| Carolina Andrea Vega Ruiz | 18.765.432-1 | 38 | FONASA | CO-2024-004 | En seguimiento | Al día |
| Valentina Isabel Herrera Muñoz | 11.222.333-4 | 57 | ISAPRE | CO-2024-005 | Plan de atención | Al día |
| Marcela Alejandra Castro Bravo | 14.555.666-7 | 61 | FONASA | CO-2024-006 | Diagnóstico | Al día |
| Lorena Beatriz Figueroa Parra | 16.888.999-0 | 49 | FONASA | CO-2024-007 | Sospecha progresión | **Vencida** |
| Daniela Paz Reyes Contreras | 13.444.555-6 | 55 | ISAPRE | CO-2024-008 | Fallecido | — |
| Sofía Macarena Rivas Tapia | 17.111.222-3 | 42 | FONASA | CO-2024-009 | En tratamiento | Por vencer |
| Teresa del Carmen Morales Jara | 10.999.888-7 | 68 | FONASA | CO-2024-010 | Descartado | — |

---

## 🗺️ Mapa de Pantallas

```
LOGIN
  │
  └── DASHBOARD (Home)
        ├── Listado de Casos
        │     └── Detalle del Caso
        │           ├── Tab: Eventos
        │           ├── Tab: Trazabilidad
        │           ├── Tab: Notas Clínicas
        │           ├── Tab: Alertas
        │           └── Tab: Historial Casos
        │
        ├── Búsqueda de Paciente
        │     └── [Resultados → Detalle del Caso]
        │
        ├── Agregar Nuevo Caso (Wizard 4 pasos)
        │
        ├── Cola de Asignación
        │
        ├── Gestión de Alertas
        │
        ├── Auditoría
        │
        ├── Monitor de Integración SAP
        │
        ├── Mi Perfil
        │
        └── ADMINISTRACIÓN
              ├── Eventos Clínicos
              ├── Estados
              ├── Alertas y Plazos
              ├── Diagnósticos CIE-10
              ├── Usuarios
              └── Roles y Permisos
```

---

## 🧪 Guía de Pruebas Paso a Paso

---

### PRUEBA 1: Login y Acceso al Sistema

**Objetivo:** Verificar la pantalla de inicio de sesión.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Abrir la URL en el navegador | Se muestra pantalla de Login con logo de Clínica Alemana, título "Navegación Oncológica" |
| 2 | Verificar que el campo correo tiene valor pre-cargado | `maria.gonzalez@clinica.cl` |
| 3 | Presionar botón **"Ingresar"** | Se accede al Dashboard |

**Elementos a validar:**
- ✅ Logo de Clínica Alemana de Osorno visible
- ✅ Campos correo y contraseña presentes
- ✅ Botón "Ingresar" funcional
- ✅ Texto "Sistema de uso exclusivo para personal autorizado"
- ✅ Diseño profesional, fondo azul degradado

---

### PRUEBA 2: Dashboard Operativo

**Objetivo:** Verificar la pantalla de inicio con indicadores consolidados.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Después del login, verificar Dashboard | Se muestran 4 tarjetas KPI |
| 2 | Verificar tarjeta "Alertas Vencidas" | Muestra **2** en rojo |
| 3 | Verificar tarjeta "Alertas Por Vencer" | Muestra **2** en amarillo |
| 4 | Verificar tarjeta "Casos Activos" | Muestra **8** en azul |
| 5 | Verificar tarjeta "Pendientes Asignación" | Muestra **4** en morado |
| 6 | Verificar sección "Cumplimiento GES" | 3 alertas GES (GO-1, GO-2, GO-3) con niveles |
| 7 | Verificar sección "Alertas que requieren acción" | Listado priorizado de alertas |
| 8 | Verificar "Distribución de Casos por Estado" | 7 bloques de colores con conteo |
| 9 | Click en "Buscar Paciente" (botón azul arriba derecha) | Navega a Búsqueda de Paciente |
| 10 | Click en "Ver alertas →" | Navega a Gestión de Alertas |
| 11 | Click en "Ver casos →" | Navega a Listado de Casos |
| 12 | Click en "Ver cola →" | Navega a Cola de Asignación |

**Elementos a validar:**
- ✅ Logo en sidebar (esquina superior izquierda)
- ✅ Sidebar con 7 menús principales + sección Administración
- ✅ Badge rojo "4" en Cola de Asignación (sidebar)
- ✅ Nombre "María González — Enfermera Navegadora" en la parte inferior del sidebar
- ✅ Todos los links de navegación funcionan

---

### PRUEBA 3: Listado de Casos Oncológicos

**Objetivo:** Verificar la bandeja de casos con filtros y paginación.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Listado de Casos" en sidebar | Se muestra tabla con 10 casos |
| 2 | Verificar columnas | ID, Paciente, RUT, Diagnóstico, Estado, Alerta, GES, Último Evento |
| 3 | Escribir "Ana" en el buscador | Se filtra mostrando solo Ana María Rojas |
| 4 | Limpiar búsqueda, seleccionar filtro "Sospecha" | Se muestran solo casos en EST-01 |
| 5 | Cambiar filtro alertas a "Vencida" | Se muestran solo CO-2024-003 y CO-2024-007 |
| 6 | Verificar botón **"+ Nuevo Caso"** | Presente arriba a la derecha |
| 7 | Verificar botón **"Exportar"** | Presente en área de filtros |
| 8 | Click ícono 👁 en cualquier caso | Navega al Detalle del Caso |

**Elementos a validar:**
- ✅ Badges de colores para estados (azul)
- ✅ Semáforo de alertas: verde (Al día), amarillo (Por vencer), rojo (Vencida), gris (—)
- ✅ Paginación funcional
- ✅ Contador "10 casos encontrados" se actualiza con filtros
- ✅ Nombre de la navegadora bajo el nombre de la paciente

---

### PRUEBA 4: Detalle del Caso Oncológico

**Objetivo:** Verificar la vista completa de un caso con sus 5 pestañas.

**Preparación:** Desde el Listado de Casos, click en el ojo (👁) del caso **CO-2024-001** (Ana María Rojas Pérez).

#### 4.1 — Encabezado del caso

| Elemento | Valor esperado |
|----------|----------------|
| Nombre paciente | Ana María Rojas Pérez |
| Badge de estado | "En tratamiento" (azul) |
| Subtítulo | CO-2024-001 · RUT: 12.345.678-9 · C50.4 (Mama) |
| Card "Estado Actual" | En tratamiento / Desde: 2024-06-15 |
| Card "Diagnóstico" | C50.4 / CIEO3: 8500/3 |
| Card "Clasificación" | T2N1M0 / Estadio: IIB |
| Card "Nivel de Alerta" | Al día / GES: Al día |
| Botón arriba derecha | "+ Registrar Evento" |
| Flecha ← atrás | Regresa al Listado de Casos |

#### 4.2 — Tab Eventos (pestaña por defecto)

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Verificar que Tab "Eventos" está activa | Subrayado azul |
| 2 | Contar eventos | 6 eventos listados |
| 3 | Verificar orden | Más reciente arriba (EVG-009, 2024-07-01) |
| 4 | Verificar badges de origen | "SAP" (morado) y "Manual" (azul) |
| 5 | Verificar filtro desplegable | "Todos los eventos" / "Solo manuales" / "Solo automatizados" |

**Eventos esperados (orden):**
1. EVG-009 — Trat. sistémico - Quimioterapia (SAP, 2024-07-01)
2. EVG-007 — Comité oncológico (Manual, 2024-06-15)
3. EVG-006 — Estudio de etapificación (Manual, 2024-05-20)
4. EVG-004 — Confirmación oncológica (Manual, 2024-04-05)
5. EVG-003 — Toma de biopsia (SAP, 2024-03-25)
6. EVG-001 — Atención médica con sospecha oncológica (Manual, 2024-03-10)

#### 4.3 — Tab Trazabilidad

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click en pestaña "Trazabilidad" | Se muestra timeline vertical |
| 2 | Verificar contenido | Solo muestra estado + fecha (sin evento ni usuario) |
| 3 | Verificar orden | Más reciente arriba |

**Timeline esperado:**
- 🔵 En tratamiento (2024-06-15) — estado actual marcado en azul
- ○ Plan de atención definido (2024-06-15)
- ○ Etapificación (2024-05-20)
- ○ Diagnóstico (2024-04-05)
- ○ Sospecha (2024-03-10)

#### 4.4 — Tab Notas Clínicas

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click en pestaña "Notas Clínicas" | Se muestra sección de notas |
| 2 | Verificar área de texto | Placeholder "Escribir nueva nota clínica..." |
| 3 | Verificar botón | "+ Nueva Nota" |
| 4 | Verificar notas existentes | 3 notas con texto, autor y fecha/hora |
| 5 | Verificar orden | Más reciente arriba |

**Notas esperadas:**
1. "Paciente refiere buena tolerancia al primer ciclo de quimioterapia..." — María González, 2024-07-01 14:30
2. "Comité oncológico define esquema de tratamiento: QT neoadyuvante..." — María González, 2024-06-15 11:00
3. "Resultado de biopsia confirma carcinoma ductal infiltrante..." — María González, 2024-04-05 09:15

#### 4.5 — Tab Alertas

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click en pestaña "Alertas" | Se muestran alertas del caso |
| 2 | Para CO-2024-001 | Alerta AL-08 "Otros tratamientos" — Al día |
| 3 | Verificar link "Gestionar" | Presente en cada alerta |

#### 4.6 — Tab Historial Casos

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click en pestaña "Historial Casos" | Se muestra listado de otros casos del mismo RUT |
| 2 | Si el paciente no tiene otros casos | Mensaje "No existen otros casos oncológicos para este paciente" |
| 3 | Si tiene otros casos | Listado con ID, CIE-10, estado, fecha creación y botón para navegar |

---

### PRUEBA 5: Búsqueda de Paciente

**Objetivo:** Verificar la búsqueda por RUT y visualización de datos demográficos.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Búsqueda de Paciente" en sidebar | Se muestra campo de búsqueda |
| 2 | Escribir **"12.345"** en el campo | — |
| 3 | Presionar **"Buscar"** o Enter | Se muestra paciente encontrado |
| 4 | Verificar datos | Nombre: Ana María Rojas Pérez, RUT, Edad: 52, Previsión: FONASA |
| 5 | Verificar casos asociados | CO-2024-001 — En tratamiento |
| 6 | Click botón **"+ Nuevo Caso"** | Navega al wizard de nuevo caso |
| 7 | Click ícono de enlace en el caso | Navega al Detalle del caso |
| 8 | Limpiar y buscar "zzz" | Mensaje "No se encontró paciente con los datos ingresados" |

**RUTs que funcionan para búsqueda:**
- `12.345` → Ana María Rojas
- `9.876` → Rosa Elena Martínez
- `15.432` → Francisca Paz Soto
- `18.765` → Carolina Andrea Vega
- También funciona buscar por nombre: "Ana", "Rosa", "Carolina", etc.

---

### PRUEBA 6: Agregar Nuevo Caso (Wizard)

**Objetivo:** Verificar el flujo completo de registro de caso oncológico en 4 pasos.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click **"+ Nuevo Caso"** (desde Listado o Búsqueda) | Se muestra wizard con indicador de 4 pasos |
| 2 | **Paso 1 - Paciente:** Verificar RUT pre-cargado | 15.432.109-K |
| 3 | Verificar datos del paciente encontrado | Nombre, RUT, Edad, Previsión en recuadro verde |
| 4 | Click **"Continuar"** | Avanza al Paso 2 |
| 5 | **Paso 2 - Datos del Caso:** Verificar campos | Diagnóstico CIE-10, Patología GES, Fecha ingreso, Navegadora |
| 6 | Verificar dropdown CIE-10 | Lista con C50.0 a C50.9 |
| 7 | Click **"Continuar"** | Avanza al Paso 3 |
| 8 | **Paso 3 - Evento de Ingreso:** Verificar selector | EVG-001, EVG-002, EVG-004, EVG-015 disponibles |
| 9 | Verificar mensaje informativo | "Estado inicial resultante: Sospecha (EST-01)" |
| 10 | Click **"Continuar"** | Avanza al Paso 4 |
| 11 | **Paso 4 - Confirmación:** Verificar resumen | Paciente, RUT, Diagnóstico, GES, Evento, Estado, Fecha, Navegadora |
| 12 | Verificar alerta SAP | "Al confirmar, se enviará la notificación de creación del caso a SAP" |
| 13 | Click **"Confirmar y Crear Caso"** | Regresa al listado de casos |
| 14 | Verificar botones **"Anterior"** en cada paso | Navega al paso anterior |

**Elementos a validar:**
- ✅ Indicador de pasos (1-2-3-4) con check verde en pasos completados
- ✅ Paso actual resaltado en azul
- ✅ Navegación adelante/atrás entre pasos
- ✅ Campos obligatorios marcados
- ✅ Mensaje de notificación SAP en paso 4

---

### PRUEBA 7: Cola de Asignación

**Objetivo:** Verificar la bandeja de eventos pendientes de asignación desde SAP.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Cola de Asignación" en sidebar | Se muestran 4 ítems pendientes |
| 2 | Verificar información de cada ítem | Código evento, nombre, badge "SAP", paciente, RUT, fecha, código SAP |
| 3 | Verificar sección "Caso(s) activo(s)" | Muestra el/los caso(s) del paciente con link "Ver caso" |
| 4 | Click botón **"✓ Confirmar"** en primer ítem | Se abre modal de confirmación |
| 5 | Verificar modal | Pregunta si asignar evento al caso, mensaje informativo azul |
| 6 | Click **"Confirmar"** en modal | Se cierra modal |
| 7 | Click **"✕ Descartar"** | (En mockup, botón presente pero sin modal aún) |

**Ítems esperados en la cola:**
1. EVG-016 — Seguimiento Oncología médica (Ana María, código 101211)
2. EVEMAMA-003 — Seguimiento Mamografía (Carolina, código R401010MB)
3. EVG-009 — Quimioterapia (Valentina, código 202507)
4. EVG-003 — Toma de biopsia (Rosa Elena, código 801003)

**Elementos a validar:**
- ✅ Badge "SAP" morado en cada evento
- ✅ Icono de clipboard morado
- ✅ Información del caso activo con link al detalle
- ✅ Botones Confirmar (verde) y Descartar (rojo)
- ✅ Modal con mensaje explicativo

---

### PRUEBA 8: Gestión de Alertas

**Objetivo:** Verificar la bandeja de alertas con panel de gestión.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Gestión de Alertas" en sidebar | Se muestra bandeja de alertas |
| 2 | Verificar orden | Vencidas primero (rojo), luego Por vencer (amarillo), luego Al día (verde) |
| 3 | Verificar filtros superiores | Botones: Todas, Vencida, Por vencer, Al día |
| 4 | Click botón **"Vencida"** | Solo se muestran alertas vencidas (2) |
| 5 | Click botón **"Todas"** | Se muestran todas las alertas (6) |
| 6 | Click en alerta **AL-13** | Se activa panel lateral derecho |
| 7 | Verificar panel "Gestión de Alerta" | Datos de la alerta + 4 botones de acción |
| 8 | Verificar las 4 acciones | Registrar Gestión, Reprogramar Fecha, Registrar Evento de Cierre, Cancelar Administrativamente |
| 9 | Verificar campo "Motivo / Nota" | Textarea presente |
| 10 | Verificar link "Ver detalle del caso →" | Presente al final del panel |

**Alertas esperadas (en orden):**
1. AL-13 — Sospecha de recaída (Lorena, CO-2024-007) — **Vencida**
2. AL-01 — Sospecha oncológica (Francisca, CO-2024-003) — **Vencida**
3. AL-08 — Otros tratamientos (Sofía, CO-2024-009) — Por vencer, Reprogramada ×1
4. AL-04 — Estudio de etapificación (Rosa Elena, CO-2024-002) — Por vencer, **Gestionada**
5. AL-05 — Comité oncológico (Valentina, CO-2024-005) — Al día
6. AL-08 — Otros tratamientos (Ana María, CO-2024-001) — Al día

**Elementos a validar:**
- ✅ Indicadores de color: rojo/amarillo/verde (círculos y badges)
- ✅ Badge "Reprogramada ×1" (morado) en AL-08 de Sofía
- ✅ Badge "Gestionada" (azul) en AL-04 de Rosa Elena
- ✅ Panel lateral aparece al seleccionar una alerta
- ✅ Alerta seleccionada tiene borde azul

---

### PRUEBA 9: Auditoría

**Objetivo:** Verificar el log de auditoría (solo lectura).

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Auditoría" en sidebar | Se muestra tabla de auditoría |
| 2 | Verificar columnas | Fecha/Hora, Usuario/Origen, Acción, Entidad, Detalle |
| 3 | Verificar que hay 10 registros | — |
| 4 | Escribir "Sistema" en buscador | Se filtran solo acciones del sistema |
| 5 | Seleccionar filtro "Caso creado" | Solo se muestra el registro de creación |
| 6 | Verificar badges de acción | Colores distintos por tipo |

**Tipos de acción con colores:**
- 🟢 Caso creado (verde)
- 🔵 Evento registrado / Evento recibido / Nota creada (azul)
- 🟣 Cambio de estado (morado)
- 🟡 Alerta gestionada (amarillo)
- ⚪ Catálogo actualizado (gris)

**Elementos a validar:**
- ✅ Solo lectura — no hay botones de edición ni eliminación
- ✅ Filtro por tipo de acción funcional
- ✅ Búsqueda por texto funcional
- ✅ Se registran acciones tanto de usuarios como del "Sistema"

---

### PRUEBA 10: Monitor de Integración SAP

**Objetivo:** Verificar el monitoreo de mensajes con SAP PI.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Monitor de Integración" en sidebar | Se muestra monitor |
| 2 | Verificar KPIs superiores | 6 Exitosos (verde), 1 Error (rojo), 7 Total (azul) |
| 3 | Verificar tabla de mensajes | 7 mensajes con columnas: Fecha, Dirección, Tipo, Caso, Detalle, Estado, Reintentos |
| 4 | Verificar dirección | "SAP → Sistema" y "Sistema → SAP" con colores |
| 5 | Buscar el mensaje con error | Prestación no mapeada (código 999999), 2 reintentos |
| 6 | Verificar badges de estado | "Recibido" (verde), "Enviado" (verde), "Error" (rojo) |

**Mensajes esperados:**
| Dirección | Tipo | Caso | Estado |
|-----------|------|------|--------|
| SAP → Sistema | Evento | CO-2024-001 | Recibido |
| SAP → Sistema | Evento | CO-2024-004 | Recibido |
| Sistema → SAP | Caso creado | CO-2024-003 | Enviado |
| SAP → Sistema | Evento | CO-2024-001 | Recibido |
| Sistema → SAP | Caso cerrado | CO-2024-010 | Enviado |
| SAP → Sistema | Evento | CO-2024-009 | **Error** (2 reintentos) |
| Sistema → SAP | Caso cerrado | CO-2024-008 | Enviado |

---

### PRUEBA 11: Administración — Eventos Clínicos

**Objetivo:** Verificar el mantenedor del catálogo de eventos.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Administración" en sidebar | Se expande submenú |
| 2 | Click "Eventos Clínicos" | Se muestra tabla del catálogo |
| 3 | Verificar columnas | ID, Nombre, Tipo, Origen, Código SAP, Diagnóstico |
| 4 | Contar eventos | ~30 eventos (EVG-001 a EVG-033 + EVEMAMA-001 a EVEMAMA-005) |
| 5 | Filtrar por tipo "EVEMAMA" | Solo se muestran 5 eventos específicos de mama |
| 6 | Buscar "Quimioterapia" | Se muestra EVG-009 |
| 7 | Verificar botón "Nuevo Evento" | Presente arriba derecha |
| 8 | Verificar ícono editar (lápiz) | Presente en cada fila |

**Elementos a validar:**
- ✅ Badges "EVG" (azul) y "EVEMAMA" (morado) por tipo
- ✅ Badges "Manual" (gris) y "Automatizado" (verde) por origen
- ✅ Filtro + búsqueda funcionales

---

### PRUEBA 12: Administración — Estados Clínicos

**Objetivo:** Verificar el mantenedor de estados del caso.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Estados" en submenú Administración | Se muestra tabla |
| 2 | Verificar que hay 13 estados | EST-01 a EST-13 |
| 3 | Verificar columnas | Código, Nombre, Carácter, ¿Final?, Duración |
| 4 | Verificar badges de carácter | Activo (verde), Cierre (rojo), Pausa (amarillo) |
| 5 | Verificar estados finales | EST-09, EST-10, EST-12 marcados como "Sí" |

---

### PRUEBA 13: Administración — Alertas y Plazos

**Objetivo:** Verificar la configuración del motor de alertas.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Alertas y Plazos" en submenú | Se muestra catálogo |
| 2 | Verificar tabla principal | 15 alertas (AL-01 a AL-15) |
| 3 | Verificar columnas | ID, Nombre, Evento que abre, Plazo, Umbral, Día Alerta |
| 4 | Verificar sección "Alertas GES" | 5 alertas GES (AL-GES-1 a AL-GES-5) separadas |
| 5 | Verificar datos GES | Garantía, Evento, Plazo GES, Condición de cierre |

**Ejemplo de alertas:**
- AL-01: Sospecha oncológica, 2 días, umbral 70%, día alerta 2
- AL-09: Hormonoterapia, 180 días, umbral 70%, día alerta 126
- AL-15: Canasta GES-ISAPRE, 0 días (nace vencida)

---

### PRUEBA 14: Administración — Diagnósticos CIE-10

**Objetivo:** Verificar catálogo de diagnósticos y tipos de cáncer.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Diagnósticos CIE-10" en submenú | Se muestran 2 tablas |
| 2 | Tabla "Tipos de Cáncer" | 1 registro: Cáncer de mama (CA_MAMA), prefijo C50, EVEMAMA |
| 3 | Tabla "Códigos CIE-10" | 9 códigos (C50.0 a C50.9) |
| 4 | Verificar badge "EVEMAMA" | Presente en cada código |

---

### PRUEBA 15: Administración — Usuarios

**Objetivo:** Verificar la gestión de usuarios del sistema.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Usuarios" en submenú | Se muestra tabla de usuarios |
| 2 | Verificar que hay 5 usuarios | — |
| 3 | Verificar columnas | Nombre, Correo, Rol, Estado, Acciones |
| 4 | Verificar badges de rol | Azul (Navegadora), Amarillo (GES), Morado (Admin) |
| 5 | Verificar estados | 4 activos (verde), 1 inactivo (rojo) — Claudia Fernández |
| 6 | Verificar botones de acción | Editar (lápiz) y Desactivar/Activar (ícono usuario) |
| 7 | Verificar botón "Nuevo Usuario" | Presente arriba derecha |

---

### PRUEBA 16: Administración — Roles y Permisos

**Objetivo:** Verificar la matriz de roles y permisos.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click "Roles y Permisos" en submenú | Se muestra pantalla completa |
| 2 | Verificar 3 cards de roles | Enfermera Navegadora, Enfermera GES, Administrador |
| 3 | Verificar cada card tiene descripción | Texto breve del objetivo del rol |
| 4 | Verificar "Matriz de Permisos" | Tabla con 15 permisos × 3 roles |
| 5 | Verificar checks verdes ✓ y grises ✕ | Correctos según documento de requisitos |

**Permisos clave a verificar:**
- "Crear casos oncológicos" → Solo Navegadora ✓
- "Registrar EVG-025" → Solo GES ✓
- "Gestionar usuarios y roles" → Solo Administrador ✓
- "Registrar notas clínicas" → Los 3 roles ✓
- "Consultar evolución de casos" → Los 3 roles ✓

---

### PRUEBA 17: Mi Perfil

**Objetivo:** Verificar la pantalla de perfil de usuario.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click ícono de usuario (abajo del sidebar) | Navega a Mi Perfil |
| 2 | Verificar datos mostrados | María González, maria.gonzalez@clinica.cl |
| 3 | Verificar campo "Rol" | "Enfermera Navegadora" no editable (gris) |
| 4 | Verificar sección "Cambiar contraseña" | 3 campos: actual, nueva, confirmar |
| 5 | Verificar botón "Guardar Cambios" | Presente |

---

### PRUEBA 18: Navegación General

**Objetivo:** Verificar que la navegación entre pantallas funciona correctamente.

| Paso | Acción | Resultado esperado |
|------|--------|--------------------|
| 1 | Click icono ✕ del sidebar | Sidebar se colapsa (solo íconos) |
| 2 | Click icono ≡ del sidebar | Sidebar se expande (íconos + texto) |
| 3 | Verificar que todas las rutas del sidebar funcionan | 7 menús principales + 6 de administración |
| 4 | Desde Detalle de caso, click flecha ← | Regresa al Listado de Casos |
| 5 | Desde Dashboard, click "Ver todas" en alertas | Va a Gestión de Alertas |
| 6 | Verificar botón logout (↪ abajo sidebar) | Regresa al Login |

---

## 📊 Resumen de Cobertura

| Área | Pantallas | Estado |
|------|-----------|--------|
| Autenticación | Login, Mi Perfil | ✅ Funcional |
| Dashboard | Home con KPIs | ✅ Funcional |
| Gestión de Casos | Listado, Detalle (5 tabs), Nuevo Caso | ✅ Funcional |
| Búsqueda | Búsqueda de Paciente | ✅ Funcional |
| Cola de Asignación | Bandeja con confirmar/descartar | ✅ Funcional |
| Alertas | Gestión con panel lateral | ✅ Funcional |
| GES | Cumplimiento en Dashboard | ✅ Funcional |
| Auditoría | Log solo lectura | ✅ Funcional |
| Integración SAP | Monitor de mensajes | ✅ Funcional |
| Administración | 6 mantenedores | ✅ Funcional |

---

## ⚠️ Limitaciones del Mockup

| Limitación | Descripción |
|------------|-------------|
| Sin persistencia | Los datos se reinician al recargar la página |
| Sin validación de login | Cualquier credencial permite acceso |
| Sin diferenciación por rol | El mockup muestra todas las funcionalidades sin importar el rol |
| Acciones simuladas | Los botones de Confirmar/Guardar/Registrar no modifican datos realmente |
| Sin lógica de transiciones | No valida la máquina de estados ni la matriz de transiciones |
| Datos estáticos | Los 10 casos y sus eventos son siempre los mismos |

---

## 📞 Contacto

Para consultas sobre el mockup o el proyecto:
- **Desarrollo:** [Equipo de desarrollo]
- **Proyecto:** Sistema de Navegación Oncológica — Clínica Alemana de Osorno

---

*Documento generado: Agosto 2026 — Versión 1.0*
