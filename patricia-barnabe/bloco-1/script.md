/* --------- SHERLOCK BUGS --------------- 

Vocês são grandes desenvolvedoras na empresa que sempre sonharam! Uma das suas funções é 
encontrar bugs que fazem com que o projeto não funcione. Para essa tarefa, encontre os erros que fazem com que esses códigos não funcionem e escreva uma solução.

ATENÇÃO: Não é permitido rodar esse código em NENHUM console ou playcode. Usem todo o conhecimento
de vocês para abstrair, supor os problemas e escrever uma possível solução.

*/


//---1. [ERRADO]

        multiplicacao(a,b) {
            a * b  
        }

//---1. [CERTO]

        function multiplicacao(a,b) {
        return  a * b  
        }

-------------------------------------------------------------------------------------------------------------

//---2. [ERRADO]

        while(item > 10) {
            item++
        }

//---2. [CERTO]

        //item = 0
        while(item < 10) {
        //enquanto (20 for maior que 10)
        return item++
        }

--------------------------------------------------------------------------------------------------------------

//---3. Deve exibir "Banana" 4 vezes [ERRADO]

        const fruits = ["Maça", "Banana", "Limão", "Pêra"];
        for(x; x = 0; x+) {
            consolelog(x)
        }


//---3. Deve exibir "Banana" 4 vezes [CERTO]

        const fruits = ["Maça", "Banana", "Limão", "Pêra"];
        for(2; x = 0; x+) {
            consolelog(x)
        }
        for(let x=0; x < fruits.lenght; x++) {
            console.log(fruits[1])
        }

----------------------------------------------------------------------------------------------------------------

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo [ERRADO]

        if frases < palavras {
            alert("oi gente")
        } else if {
            aler ("tchau gente")
        }


//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo [CERTO]

        if (frases > palavras) {
            alert("oi gente")
        } else {
            alert ("tchau gente")
        }

----------------------------------------------------------------------------------------------------------------

//---5. Deve exibir o valor da propriedade "sobrenome" [ERRADO]

        let curso: {
            nome = "Jardinagem";
            periodo = "manha" ;
            professora = "Amanda" {
                sobrenome = "Lopes"
            };
        }
        console.log(professora.sobrenome)


//---5. Deve exibir o valor da propriedade "sobrenome" [CERTO]

        let curso = {
            nome: "Jardinagem",
            periodo: "manha",
            professora: {
                nome: "Amanda",
                sobrenome: "Lopes"
            }
        }
        console.log(curso.professora.sobrenome)