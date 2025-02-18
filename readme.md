# Node.js + TypeScript Authentication API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![Express](https://img.shields.io/badge/Express-4.x-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)

🚀 API de autenticación basada en Node.js, TypeScript y SQL Server con validaciones y generación de tokens JWT.

## 📂 Estructura del Proyecto
```
node-ts-auth/
│── src/
│   ├── config/
│   │   ├── dbConfig.ts
│   ├── middleware/
│   │   ├── validationMiddleware.ts
│   │── enums
│   │   ├── codeHttpsEnums.ts
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── controller.ts
│   │   │   ├── repository.ts
│   │   │   ├── routes.ts
│   │   │   ├── services.ts
│   │   │   ├── validations.ts
│   ├── index.ts
│── .env
│── package.json
│── tsconfig.json
│── README.md
```

## 🛠 Tecnologías
- **Node.js** (v18.x)
- **Express.js**
- **TypeScript**
- **JWT para autenticación**
- **SQL Server**
- **express-validations para validaciones**

## 🚀 Instalación y Ejecución
```bash
# Clonar el repositorio
git clone (https://github.com/serviciositpm/ApiAppSeguridad.git) 
cd node-ts-auth

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar en desarrollo
npm run dev

# Construir y ejecutar en producción
npm run build
npm start
```

## 🔑 Endpoints
- `POST /api/auth/login` → Recibe `{ username, password }` y devuelve un **JWT**.

## 📜 Licencia
Este proyecto está bajo la licencia MIT. ¡Siéntete libre de usarlo y mejorarlo! 🚀
