# 🚀 Proyecto Backend con Node.js, Express, TypeScript y PostgreSQL

Este proyecto es una API REST desarrollada con **Node.js**, **Express**, **TypeScript** y **PostgreSQL**. Se implementa autenticación con **JWT**, seguridad con **Bcrypt**, y se sigue el patrón **MVC** para una mejor organización.

## 📌 Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 16 o superior)
- **PostgreSQL** (versión 12 o superior)
- **pgAdmin 4** (opcional, para administrar la base de datos)


## 📦 Instalación

1️⃣ Clona el repositorio:

```sh
git clone https://github.com/tamybl/proyecto-backend-nodejs-express.git

cd proyecto-backend-nodejs-express
```

2️️ Clona el repositorio:
```sh
npm install
```
## 🛠️ Configuración de la Base de Datos

### 1️⃣ Crea la base de datos en PostgreSQL:

```sql
CREATE DATABASE nombre_de_tu_base_de_datos;
```

### 2️⃣ Carga la estructura de la base de datos:

Ejecuta el siguiente comando en la terminal:

```sh
psql -U postgres -d db_trekly -f database/users.sql
```

O desde pgAdmin4:

Abre tu base de datos, ve a la pestaña Query Tool y ejecuta el contenido de database/users.sql.

### 3️⃣ Verifica la creación de la tabla:

```sql
SELECT * FROM users;
```
## 🔑 Variables de Entorno

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

```env
# Configuración del servidor
PORT=3000

# Configuración de la base de datos
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=root
DB_NAME=db_trekly
```
