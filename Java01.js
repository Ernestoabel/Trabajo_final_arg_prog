let array=[];
let indice=0;
let auxiliar;

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
            'timezone': 'America/Sao_Pablo'
        }
    }).done(function (respuestaClima) {
        respuestaClima.daily.precipitation_probability_max.forEach(probabilidad => {
            console.log(probabilidad);
        });
        $('#inputZonaHoraria').val('La zona horaria es ' + respuestaClima.timezone);
        $('#inputProbabilidad').val('La probabilidad de lluvia de hoy es ' + respuestaClima.daily.precipitation_probability_max[0]);
    });
});

function obtenerFechaFormateada(fecha) {
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    return `${anio}-${mes > 10 ? mes : '0' + mes}-${dia}`;
}

function usuario(){
    auxiliar=document.getElementById('exampleInputEmail1').value;
    array.push(document.getElementById('exampleInputEmail1').value);
    for(let i=0;i<indice;i++){
        if(array[i]===auxiliar){
            alert("Usurio ya ingresado");
        }
    }
    document.getElementById("exampleInputEmail1").value = "";
    indice++;
}

function tomarDia(){
    let dia=document.getElementById('combo-dia').value;
    document.getElementById("miParrafo").innerHTML = document.getElementById("miParrafo").innerHTML + "<br> Hola, su usuario es " + auxiliar + " tiene turno el dia " + dia;
}





