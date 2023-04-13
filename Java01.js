let array=[];
let indice=0;
let auxiliar;


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





