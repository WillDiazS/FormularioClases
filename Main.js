function validarDatos() {
    var rut = document.getElementById("rut"); //GETRUT
    if (rut < 9  && rut > 10) {
        alert("El rut deber entre 9 y 10 carácteres.");
        
    }
    if(document.getElementById("rut").value == "") {
        alert("El rut esta vacio");
        
    }
    
    var nombre = document.getElementById("Nombre"); //GETNOMBRE
    if (nombre < 3 && nombre > 20) {
        alert("El nombre debe tener 3-20 carácteres.");
    }
    if(document.getElementById("nombre").value == "") {
        alert("El nombre esta vacio");
        
    }         


    var apPaterno = document.getElementById("apellidoPaterno"); //GET APELLIDO PATERNO
    if (appPaterno < 3 && appPaterno > 20) {
        alert("El apellido debe tener 3-20 carácteres.");
    }
    if (document.getElementById("apPaterno").value == "") {
        alert("El apellido paterno esta vacio");
        
    }

    var apMaterno = document.getElementById("apellidoMaterno"); //GET APELLIDO MATERNO
    if (apMaterno < 3 && apMaterno > 20) {
        alert("El apellido materno debe tener 3-20 carácteres.");
    }
    if (document.getElementById("apMaterno").value == "" ) {
        alert("El apellido esta esta vacio.");
        
    }

    if(document.getElementById('genero').value == "0") {   //SELECT GENERO
        alert("Generio Vacio. Seleccione uno");
        
    
                                                           
    //CELULAR SOLO NUMEROS
    if(document.getElementById("genero").value == "");
        alert("No ha ingresado Celular.");  
     


    }

    var form = document.getElementById("postulation_form");
    
    from.addEventLister ('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();


    var rut = document.getElementById("rut");
    rut.classList.remove("is-invalid","is-valid");

    if(rut.value=="") {

        username.classList.add("is-invalid");
    }
    else {
        username.classList.add("is-valid");
    }
    }







)};

