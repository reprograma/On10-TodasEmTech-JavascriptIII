### 1. Revisando conceitos

Vamos revisar conceitos? Resposta as perguntas abaixo com as suas palavras: 

```
1. O que é iteração?
Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos em uma direção e Y passos em outra; por exemplo, a ideia "vá 5 passos para leste" pode ser expressa em um laço desta forma:

var passo;
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste');
}

2. Qual a diferença de uma function padrão e a arrow function?

-Function padrão: Um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

Arrow function: Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

Em resumo, a sintaxe será o grande diferencial entre elas.

3. Como funciona o método map()? 

- O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration