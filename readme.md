
# 🔐 API de Autenticación con Node.js, TypeScript y SQL Server

API RESTful desarrollada con Node.js, TypeScript y Express.js, que implementa autenticación mediante tokens JWT y se conecta a una base de datos SQL Server 2019. Ideal para proyectos que requieren una capa de seguridad robusta y escalable.

## 🚀 Características

- 🔑 Autenticación segura con JWT
- 🧩 Arquitectura modular y escalable
- 🧪 Validaciones integradas con middleware
- ⚙️ Conexión a SQL Server 2019
- 🧪 Código organizado por capas (controlador, servicio, repositorio)

## 🗂️ Estructura del Proyecto

```
ApiAppSeguridad/
├── src/
│   ├── config/
│   │   └── dbConfig.ts
│   ├── middleware/
│   │   └── validationMiddleware.ts
│   ├── enums/
│   │   └── codeHttpsEnums.ts
│   ├── modules/
│   │   └── auth/
│   │       ├── controller.ts
│   │       ├── repository.ts
│   │       ├── routes.ts
│   │       ├── services.ts
│   │       └── validations.ts
│   └── index.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Tecnologías Utilizadas

- [Node.js](https://nodejs.org/) v18.x
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/) para autenticación
- [SQL Server 2019](https://www.microsoft.com/en-us/sql-server/sql-server-2019)

## ⚙️ Configuración del Entorno

1. Clona el repositorio:

   ```bash
   git clone https://github.com/serviciositpm/ApiAppSeguridad.git
   cd ApiAppSeguridad
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   - Crea un archivo `.env` en la raíz del proyecto.
   - Basado en `.env.example`, define las siguientes variables:

     ```
     DB_HOST=localhost
     DB_PORT=1433
     DB_USER=tu_usuario
     DB_PASSWORD=tu_contraseña
     DB_NAME=nombre_de_tu_base_de_datos
     JWT_SECRET=tu_secreto_jwt
     ```

4. Inicia el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

## 📬 Endpoints Principales

- `POST /auth/login` → Autenticación de usuarios y generación de token JWT.
- `GET /auth/profile` → Obtención de datos del perfil del usuario autenticado.

## 🧪 Pruebas

Puedes utilizar herramientas como [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar los endpoints de la API. Asegúrate de incluir el token JWT en el encabezado `Authorization` para acceder a rutas protegidas.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

**Repositorio Original:** [serviciositpm/ApiAppSeguridad](https://github.com/serviciositpm/ApiAppSeguridad.git)
