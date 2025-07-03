# Sistema de Gestión de Turnos

## Descripción
Sistema web para la gestión de turnos de una peluquería, desarrollado con React, TypeScript y Vite.

## Características
- Gestión completa de turnos (crear, editar, aprobar, rechazar)
- Sistema de autenticación de usuarios
- Búsqueda y filtrado de turnos
- Paginación de resultados
- Interfaz responsive y moderna

## Requisitos
- Node.js 18 
- npm 

## Instalación
1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Instalar dependencias:
```bash
npm install
```

## Scripts disponibles
- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Crear build de producción
- `npm run preview` - Previsualizar build de producción
- `npm run lint` - Ejecutar ESLint

## Tecnologías utilizadas
- React 19
- TypeScript
- Vite
- Bootstrap 5
- React Router DOM
- Axios
- React Icons
- React Toastify
- Styled Components

## Estructura del proyecto
```
src/
├── components/         # Componentes reutilizables
├── pages/             # Páginas de la aplicación
├── hooks/             # Custom hooks
├── services/          # Servicios API
├── styles/            # Estilos globales
└── App.jsx            # Componente principal
```

## Licencia
MIT License

## Autor
Enzo Program

## Notas de seguridad
- La autenticación está implementada con un sistema de usuarios simulado
- Los datos sensibles deben ser protegidos en un entorno de producción
- Las contraseñas deben ser almacenadas de forma segura

## Notas de uso
Usuarios de prueba:
Admin: admin / admin123
Usuario: user / user123
                