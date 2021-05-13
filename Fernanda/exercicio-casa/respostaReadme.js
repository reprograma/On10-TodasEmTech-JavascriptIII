//DESAFIOS


// QUESTÃO 1

let lanche = "CACHORRO-QUENTE"
console.log(lanche)
let lancheCod = 1
let quantidade = 2
const valorLAnche = 4.50
console.log(lancheCod , quantidade);

let valorTotal = valorLAnche*quantidade;
console.log(valorTotal)

// QUESTÃO 2

//QUESTÃO 3

//QUESTÃO 4

let alcool=0;
let gasolina=0;
let diesel=0;

let codigo = prompt('Digite o código:');

while (codigo!='4'){
    
    if(codigo==='1'){

        alcool=alcool+1
        codigo = prompt('Digite o código')
    }else if(codigo==='2'){

        gasolina=gasolina+1
        codigo = prompt('Digite o código')
    }else if(codigo==='3'){

        diesel=diesel+1
        codigo = prompt('Digite o código')
    }else{
        codigo=prompt('Digite um código válido entre 1 e 4')
    }

}
console.log('Muito Obrigado');
console.log(`Alcool:${alcool}`);
console.log(`Gasolina:${gasolina}`);
console.log(`Diesel:${diesel}`);

//QUESTÃO 5


let senhaDigitada = prompt('Digite a senha solicitada:')

if(senhaDigitada==2002){
    alert('Acesso liberado')
}else if(senhaDigitada!==2002){
    console.log(senhaDigitada , 'Senha Inválida')
}

//QUESTÃO 6

const vendedor = "Lucas";
console.log(vendedor);
const salarioFixo = 1500.50;
console.log(salarioFixo);
const comissao = 0.15;
let vendasMes = 550.10;
console.log(vendasMes);


let salarioFinal =(vendasMes*comissao)+salarioFixo;
let arredondado = parseFloat(salarioFinal.toFixed(2));
console.log('R$', arredondado);