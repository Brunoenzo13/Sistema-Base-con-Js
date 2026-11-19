# Manual - Registro de alumnos con HTML, JavaScript, Node.js y SQLite

## ¿Que hicimos?

Adaptamos nuestro trabajo de PHP para que funcione con JavaScript y Node.js, manteniendo la base de datos `alumnos.db`.
La pagina permite escribir **nombre, apellido y edad**, guardar al alumno y ver todos los alumnos registrados.

## Programas utilizados

- **Visual Studio Code**: para escribir el codigo.
- **HTML**: para crear las paginas y el formulario.
- **JavaScript**: para enviar los datos desde el navegador y mostrar la tabla.
- **Node.js**: para ejecutar JavaScript en el servidor.
- **SQLite**: para guardar los datos en `alumnos.db`.

No necesitamos PHP ni XAMPP para ejecutar esta version.

## Paso 1 - Instalar Node.js

Instala una version reciente de Node.js (recomendado: version 24 o superior).
Abri la terminal de Visual Studio Code y escribi:

```bash
node -v
```

Si aparece la version, Node.js esta instalado.

## Paso 2 - Abrir la carpeta

Descomprimi el ZIP en una carpeta de la computadora y abri esa carpeta desde Visual Studio Code.
La carpeta incluye:

- `index.html`: formulario de alumnos.
- `ver_alumnos.html`: tabla donde se muestran los alumnos.
- `script.js`: JavaScript que se ejecuta en el navegador.
- `server.js`: JavaScript que se ejecuta con Node.js y usa SQLite.
- `alumnos.db`: la misma base de datos del proyecto anterior.

## Paso 3 - Iniciar el servidor

En la terminal de Visual Studio Code, dentro de la carpeta del proyecto, escribi:

```bash
node server.js
```

Si todo esta bien, aparecera:

`Proyecto funcionando en http://localhost:3000`

Ahora abri el navegador y entra a:

`http://localhost:3000`

**No abras `index.html` con doble clic:** para guardar datos, la pagina debe abrirse desde el servidor Node.js.

## Paso 4 - Guardar alumnos

1. Completa nombre, apellido y edad.
2. Presiona el boton **Guardar**.
3. `script.js` envia los datos a Node.js con `fetch()`.
4. `server.js` recibe los datos y ejecuta el `INSERT` en SQLite.
5. Los datos quedan guardados en `alumnos.db`.

## Paso 5 - Ver alumnos

1. Presiona **Ver alumnos registrados**.
2. El navegador abre `ver_alumnos.html`.
3. `script.js` solicita los datos guardados con `fetch()`.
4. `server.js` ejecuta un `SELECT` en la base de datos.
5. Se muestran ID, nombre, apellido y edad en una tabla.

## ¿Como funciona el proyecto?

HTML (formulario) → JavaScript (`fetch`) → Node.js (`server.js`) → SQLite (`alumnos.db`).

Y para mostrar los datos, el recorrido es al reves: SQLite → Node.js → JavaScript → tabla HTML.

## ¿Que reemplazamos del proyecto anterior?

| Antes | Ahora |
|---|---|
| `index.php` | `index.html` |
| `guardar.php` | `server.js` (ruta POST `/api/alumnos`) |
| `ver_alumnos.php` | `ver_alumnos.html` + `script.js` |
| PHP con PDO | Node.js con `node:sqlite` |
| XAMPP / Apache | Servidor Node.js |
| `alumnos.db` | `alumnos.db` (se mantiene) |

## Palabras importantes para explicar al profesor

- **Variable:** lugar donde guardamos un dato para usarlo en el codigo.
- **`fetch()`:** permite que el JavaScript del navegador envie solicitudes al servidor.
- **Node.js:** ejecuta codigo JavaScript en el servidor.
- **Servidor:** recibe solicitudes y devuelve respuestas.
- **`POST`:** envia los datos del alumno para guardarlos.
- **`GET`:** pide los alumnos para mostrarlos.
- **`INSERT`:** agrega un alumno a la tabla de la base de datos.
- **`SELECT`:** consulta los alumnos guardados.
- **`forEach`:** recorre los alumnos uno por uno para mostrarlos.
- **SQLite:** base de datos que guarda los datos en un archivo.

## Para detener el servidor

En la terminal donde pusiste `node server.js`, presiona **Ctrl + C**.

## Si no funciona

- Si la terminal dice `node no se reconoce`, instala Node.js y vuelve a abrir Visual Studio Code.
- Si dice `Cannot find module 'node:sqlite'`, instala Node.js 24 o superior.
- Si dice `EADDRINUSE`, es porque el puerto 3000 ya esta siendo usado por otro programa.
- Si solo ves el HTML, comproba que abriste `http://localhost:3000` y no un archivo con doble clic.
