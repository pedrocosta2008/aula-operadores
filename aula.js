//1-
//criou 3 variaveis constantes

//const bool1 = true
//const bool2 = false
//const bool3 = true

//verifiquei se as duas variaveis são iguais(False)

//let resultado = bool1 && bool2
//console.log("a. ", resultado)

//verifiquei se as 3 variaveis são iguais(False)

//resultado = bool1 && bool2 && bool3
//console.log("b. ", resultado)

//verificou se as duas variaveis são verdadeiras(uma é)(usou o "!" para contrariar o resultado)(assim ficando true true)
//resultado = !resultado && (bool1 || bool2)
//console.log("c. ", resultado)

//console.log("d. ", typeof resultado)

//2-

//let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")
//const soma = primeiroNumero + segundoNumero
//console.log(soma)

//ele precisa conventer a string para um numero ( number())

//3-

//let idadeamigo = Number(prompt("qual idade do seu melhor amigo?"))
//let idadeusuario = Number(prompt("qual idade voce tem?"))

//console.log("sua idade é maior do que a do seu melhor amigo?",  ( idadeamigo >= idadeusuario ))
//console.log("sua idade é maior do que a do seu melhor amigo?",  ( idadeamigo - idadeusuario ))

//4-

//let par = Number(prompt("fale um numero par"))

//console.log (!Boolean(par %2));

//sim , o numero que sobrou ele dividia por 2

// se o usuario inserir um numero impar ele ira ficar com "," ex: 2,5 / 7,5

//5-

//let anos = Number(prompt("qual sua idade em anos?"))
//let meses = anos * 12;
//let dias = meses * 30;
//let horas = dias * 24;

//console.log("qual sua idade em meses?",(meses));
//console.log("qual sua idade em dias?",(dias));
//console.log("qual sua idade em horas?",(horas));

//6-

let primeironumero = Number(prompt("fale um numero "))
let segundoNumero = Number(prompt("fale outro numero "))

console.log("O primeiro numero é maior que segundo?" , Boolean( primeironumero >= segundoNumero))
console.log("O primeiro numero é igual ao segundo?" , Boolean( primeironumero === segundoNumero))
console.log("O primeiro numero é divisivel pelo segundo?" , Boolean( primeironumero % segundoNumero))
console.log("o segundo numero é divisivel pelo primeiro?" , Boolean( segundoNumero % primeironumero))




