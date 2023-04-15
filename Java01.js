let array = [];
let indice = 0;
let auxiliar;
let bandera = 1;
let lunes;
let martes;
let miercoles;
let jueves;
let viernes;
let sabados;

$(document).ready(function () {
    let diaHoy = new Date();
    let diaProximaSemana = new Date();
    diaProximaSemana.setDate(diaHoy.getDate() + 7);
    $.ajax({
        method: "GET",
        url: "https://api.open-meteo.com/v1/forecast",
        data: {
            'latitude': '-34.61',
            'longitude': '-58.41',
            'daily': 'temperature_2m_max,temperature_2m_min,precipitation_probability_max',
            'start_date': obtenerFechaFormateada(diaHoy),
            'end_date': obtenerFechaFormateada(diaProximaSemana),
            'timezone': 'auto'
        }
    }).done(function (respuestaClima) {
        respuestaClima.daily.precipitation_probability_max.forEach(probabilidad => {
            document.getElementById("inputTempMin").innerHTML = "<br> La temperatura minima es: <br> Lunes (" + respuestaClima.daily.temperature_2m_min[0] +
                ") Martes (" + respuestaClima.daily.temperature_2m_min[1] + ") Miercoles (" + respuestaClima.daily.temperature_2m_min[2] +
                ") Jueves (" + respuestaClima.daily.temperature_2m_min[3] + ") Viernes (" + respuestaClima.daily.temperature_2m_min[4] +
                ") Sabado (" + respuestaClima.daily.temperature_2m_min[5] + ")";
            document.getElementById("inputTempMax").innerHTML = "<br> La temperatura maxima es: <br> Lunes (" + respuestaClima.daily.temperature_2m_max[0] +
                ") Martes (" + respuestaClima.daily.temperature_2m_max[1] + ") Miercoles (" + respuestaClima.daily.temperature_2m_max[2] +
                ") Jueves (" + respuestaClima.daily.temperature_2m_max[3] + ") Viernes (" + respuestaClima.daily.temperature_2m_max[4] +
                ") Sabado (" + respuestaClima.daily.temperature_2m_max[5] + ")";
            document.getElementById("inputProbabilidad").innerHTML = "<br> La probalidad de lluvia es: <br> Lunes (" + respuestaClima.daily.precipitation_probability_max[0] +
                "%) Martes (" + respuestaClima.daily.precipitation_probability_max[1] + "%) Miercoles (" + respuestaClima.daily.precipitation_probability_max[2] +
                "%) Jueves (" + respuestaClima.daily.precipitation_probability_max[3] + "%) Viernes (" + respuestaClima.daily.precipitation_probability_max[4] +
                "%) Sabado (" + respuestaClima.daily.precipitation_probability_max[5] + "%)";
            lunes = respuestaClima.daily.precipitation_probability_max[0];
            martes = respuestaClima.daily.precipitation_probability_max[1];
            miercoles = respuestaClima.daily.precipitation_probability_max[2];
            jueves = respuestaClima.daily.precipitation_probability_max[3];
            viernes = respuestaClima.daily.precipitation_probability_max[4];
            sabados = respuestaClima.daily.precipitation_probability_max[5];
        });
    });
});

function obtenerFechaFormateada(fecha) {
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    return `${anio}-${mes > 10 ? mes : '0' + mes}-${dia}`;
}

function usuario() {
    auxiliar = document.getElementById('exampleInputEmail1').value;
    array.push(document.getElementById('exampleInputEmail1').value);
    for (let i = 0; i < indice; i++) {
        if (array[i] === auxiliar) {
            alert("Usuario ya ingresado");
            bandera = 0;
            break;
        } else {
            
            bandera = 1;
        }
    }
    document.getElementById("exampleInputEmail1").value = "";
    indice++;
}

function tomarDia() {
    let dia = document.getElementById('combo-dia').value;
    if (dia === 'Lunes') {
        if (lunes > 20) {
            alert("Ese dia puede llover");
        } else if (bandera === 1) {
            document.getElementById("miParrafo").innerHTML = document.getElementById("miParrafo").innerHTML + "<br> Hola, su usuario es " + auxiliar + " tiene turno el dia " + dia;
        }
    }
    if (dia === 'Martes') {
        if (martes > 20) {
            alert("Ese dia puede llover");
        } else if (bandera === 1) {
            document.getElementById("miParrafo").innerHTML = document.getElementById("miParrafo").innerHTML + "<br> Hola, su usuario es " + auxiliar + " tiene turno el dia " + dia;
        }
    }
    if (dia === 'Miercoles') {
        if (miercoles > 20) {
            alert("Ese dia puede llover");
        } else if (bandera === 1) {
            document.getElementById("miParrafo").innerHTML = document.getElementById("miParrafo").innerHTML + "<br> Hola, su usuario es " + auxiliar + " tiene turno el dia " + dia;
        }
    }
    if (dia === 'Jueves') {
        if (jueves > 20) {
            alert("Ese dia puede llover");
        } else if (bandera === 1) {
            document.getElementById("miParrafo").innerHTML = document.getElementById("miParrafo").innerHTML + "<br> Hola, su usuario es " + auxiliar + " tiene turno el dia " + dia;
        }
    }
    if (dia === 'Viernes') {
        if (viernes > 20) {
            alert("Ese dia puede llover");
        } else if (bandera === 1) {
            document.getElementById("miParrafo").innerHTML = document.getElementById("miParrafo").innerHTML + "<br> Hola, su usuario es " + auxiliar + " tiene turno el dia " + dia;
        }
    }
    if (dia === 'Sabado') {
        if (sabados > 20) {
            alert("Ese dia puede llover");
        } else if (bandera === 1) {
            document.getElementById("miParrafo").innerHTML = document.getElementById("miParrafo").innerHTML + "<br> Hola, su usuario es " + auxiliar + " tiene turno el dia " + dia;
        }
    }
}

$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var mensaje = $('#mensaje').val();

        if (nombre == '' || email == '' || mensaje == '') {
            alert('Por favor, complete los campos obligatorios');
            event.preventDefault();
        }
    });
});