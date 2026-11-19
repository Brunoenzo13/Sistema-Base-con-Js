const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const db = new sqlite3.Database("alumnos.db");

app.use(cors());
app.use(express.json());

db.run(`CREATE TABLE IF NOT EXISTS alumnos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    apellido TEXT,
    edad INTEGER
)`);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/script.js", (req, res) => {
    res.sendFile(__dirname + "/script.js");
});

app.get("/ver_alumnos.html", (req, res) => {
    res.sendFile(__dirname + "/ver_alumnos.html");
});

app.post("/api/alumnos", (req, res) => {
    const { nombre, apellido, edad } = req.body;

    db.run(
        "INSERT INTO alumnos (nombre, apellido, edad) VALUES (?, ?, ?)",
        [nombre, apellido, edad],
        (error) => {
            if (error) return res.send("Error al guardar");
            res.json({ mensaje: "Alumno guardado" });
        }
    );
});

app.get("/api/alumnos", (req, res) => {
    db.all("SELECT * FROM alumnos", (error, alumnos) => {
        if (error) return res.send("Error al consultar");
        res.json(alumnos);
    });
});

app.listen(3000, () => {
    console.log("Servidor funcionando");
});