let array=[];
let indice=0;
function usuario(){
    let auxiliar=document.getElementById('exampleInputEmail1').value;
    array[indice]=document.getElementById('exampleInputEmail1').value;
    if(indice>0){
        for(let i=0;i<indice-1;i++){
            if(array[i]===auxiliar){
                alert("Usurio ya ingresado")
            }
        }
    }
    indice++;
}