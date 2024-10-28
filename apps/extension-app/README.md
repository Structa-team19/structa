# Extensión de Structa

Esta es la aplicación de extensión para Structa.

## Herramientas, librerías o frameworks utilizados

- React
- TypeScript
- TailwindCSS
- Shadcn

## Arquitectura

Esta aplicación está construida implementando una arquitectura en capas. Las capas son:

- **view**: esta capa es responsable de la interfaz de usuario.
- **controller**: esta capa es responsable de entregar las acciones disponibles desde la lógica de negocio.
- **data**: esta capa es responsable del acceso a datos externos y la conexión con React.
- **use-cases**: esta capa es responsable de llamar a la lógica de negocio.
- **domain**: esta capa es responsable de definir la lógica de negocio.

### Implementación de la estructura de archivos

```
.
└── feature
    ├── controller
    |   └── feature-view-model.ts
    ├── data
    |   ├── api-services.ts
    |   └── feature-state-implementation.ts
    ├── domain
    |   ├── feature-entity.ts
    |   ├── feature-model.ts
    |   └── feature-store.ts
    ├── use-cases
    |   ├── create-feature-use-case.ts
    |   ├── get-feature-use-case.ts
    |   ├── update-feature-use-case.ts
    |   └── delete-feature-use-case.ts
    └── view
        └── feature-view.tsx
```
