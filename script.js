
const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", async function (evento) {
        evento.preventDefault(); // Evita que la pagina se recargue.

        const alumno = {
            nombre: formulario.elements["nombre"].value.trim(),
            apellido: formulario.elements["apellido"].value.trim(),
            edad: Number(formulario.elements["edad"].value)
        };

        try {
            const respuesta = await fetch("/api/alumnos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(alumno)
            });

            if (!respuesta.ok) {
                throw new Error("No se pudo guardar el alumno");
            }

            alert("Alumno guardado correctamente");
            formulario.reset();
        } catch (error) {
            alert("Error al guardar el alumno");
        }
    });
}

const lista = document.getElementById("lista");

if (lista) {
    mostrarAlumnos();
}

async function mostrarAlumnos() {
    try {
        const respuesta = await fetch("/api/alumnos");
        if (!respuesta.ok) {
            throw new Error("No se pudieron consultar los alumnos");
        }

        const alumnos = await respuesta.json();

        alumnos.forEach(function (alumno) {
            const fila = document.createElement("tr");

            [alumno.id, alumno.nombre, alumno.apellido, alumno.edad].forEach(function (dato) {
                const celda = document.createElement("td");
                celda.textContent = dato;
                fila.appendChild(celda);
            });

            lista.appendChild(fila);
        });
    } catch (error) {
        const fila = document.createElement("tr");
        const celda = document.createElement("td");
        celda.textContent = "No se pudieron cargar los alumnos";
        celda.colSpan = 4;
        fila.appendChild(celda);
        lista.appendChild(fila);
    }
}
