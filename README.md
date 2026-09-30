# Hospital Dr. Sano — Angular

Proyecto académico de una página web institucional para el Hospital Dr. Sano.

## Tecnologías

- Angular 22.2.0
- Node.js 24.x
- npm 11.x
- Bootstrap 5.3.8
- Bootstrap Icons 1.13.1
- TypeScript 5.9.2

## Estructura principal

```text
src/app/
├── components/
│   ├── hero/
│   ├── servicios/
│   ├── medicos/
│   ├── resenas/
│   ├── promociones/
│   └── solicitud/
├── interfaces/
│   ├── medico.interface.ts
│   ├── promocion.interface.ts
│   ├── resena.interface.ts
│   ├── servicio.interface.ts
│   └── solicitud.interface.ts
└── services/
    └── hospital.service.ts
```

## Funcionalidades

1. Servicios del hospital.
2. Médicos y especialidades.
3. Reseñas de pacientes.
4. Promociones vigentes.
5. Formulario para registrar y mostrar solicitudes.
6. Menú responsive y diseño Bootstrap.
7. Alertas de éxito/validación.

## Formulario y Signals

`SolicitudComponent` usa un `signal<SolicitudForm>` para mantener el estado del formulario y el `HospitalService` mantiene un signal con las solicitudes almacenadas. Al enviar una solicitud válida, el servicio la agrega y la lista de registros se actualiza inmediatamente.

## Ejecutar

Desde la carpeta del proyecto:

```bash
npm install
npm start
```

Luego abrir:

```text
http://localhost:4200
```

## Git (opcional para la entrega)

```bash
git init
git add .
git commit -m "feat: crea estructura inicial del hospital"
git add .
git commit -m "feat: agrega servicios medicos reseñas y promociones"
git add .
git commit -m "feat: implementa formulario con signals y alertas"
```
