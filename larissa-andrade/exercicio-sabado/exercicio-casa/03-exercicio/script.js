

let array = new Array(0, 0, 0, 0, 0);
let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;


array.forEach((item, index, array)=>{
    array[index] = Number(prompt("Digite o valor: "));
    if(array[index]%2 === 0){
        par++;
    }else{
        impar++;
    }
    if(array[index] > 0){
        positivo++;
    }else if(array[index] < 0){
        negativo++;
    }

})
alert(`${par} valor(es) par(es)
${impar} valor(es) impar(es)
${positivo} valor(es) positivo(s)
${negativo} valor(es) negativo(s)`);








