//[Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

const password = 2002;

//0 => invalid password, 1 => valid password
let valid = 0; 


while(valid === 0){
    let inputPassword = Number(prompt("Digite a senha:"));
    if(inputPassword !== 2002){
        alert("Senha Inválida");
    }
    else{
        alert("Acesso Permitido");
        valid = 1;
    }
}