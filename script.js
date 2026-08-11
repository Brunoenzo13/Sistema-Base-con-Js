function agregarAlumno() {

    let nombre = document.getElementById("nombre").value;
    let anio = document.getElementById("anio").value;
    let division = document.getElementById("division").value;

    if (nombre == "") {
        window.alert("Ingrese un nombre");
    }
    else {

        let alumno = new Alumno(nombre, anio, division);

        let lista = document.getElementById("lista");

        lista.innerHTML += "<li>" + alumno.nombre + " - " + alumno.anio + " - " + alumno.division + "</li>";

        window.alert("Alumno agregado");

        document.getElementById("nombre").value = "";
    }

}