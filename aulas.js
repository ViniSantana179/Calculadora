// // Variáveis em Js são dinâmicas

// // Objetos

// let s = {
//     nome :'Vinicius',
//     idade : 19, 
//     soma : (a, b) => a+b, // Método
//     array : [1, 3, 5] 
// }

// // Array

// let num = [1, 3, 5, 7, 8, 3]

// // Functions

// let corSite = "azul"

// function mudaCor(cor){
//     corSite = cor;
// }
// mudaCor('Vermelho')

// console.log(corSite)

// Tipos de Função


// function soma(a, b){
//     return a+b
// }

// let result = soma(55, 83)

// console.log(result)


// Operadores Lógicos e Aritméticos

// Operador Ternário

// let valA = 11;
// let valB = 80;


// let result = valA > valB ? "Valor A: " + valA : "Valor B: " + valB

// console.log(result)

// let valor = valA > 100 ? valA * 2 : valA - (valA/2)

// console.log(valor)

// Lógicos (&& => and, || => or, ! => not) 

// Primeiro Projeto - trocando valores de variáveis

// let a = 'vermelho'
// let b = 'azul'
// let c = a
// a = b
// b = c
// console.log(a)
// console.log(b)

// IF e Else

// let a = 13

// if (a > 20){
//     a++
// }
// else if (a%2 == 0){
//     console.log("É Par")
// }
// else{
//     console.log("Faz o L FDP")
// }


// let permissao;

// permissao = 'root'

// switch(permissao){
//     case 'comum' :
//         console.log('Usuario Comum')
//         break;

//     case 'root' : 
//         console.log('Usuario Root')
//         break;

//     default:
//         console.log('No User')
//         break;
// }


// Loops

// for (let i = 0; i < 5; i++){
//     console.log('Bom Dia')
// }

// const pessoa = {
//     nome: 'Jhonathan',
//     idade: 25
// }

// for (c in pessoa){
//     console.log(c, pessoa.c)
// }

// const cores = ['Vermelho', 'Azul', 'Verde']

// for (let cor in cores){
//     console.log(cor, cores[cor])
// // }

// function eventoClick(){
//     alert('Acionou um evento de click')
//     document.body.style.backgroundColor= 'blue';
// }

// function eventodblClick(){
//     alert('Evento de clique duplo');
// }

// function viraVermelho(){
//     let div = document.getElementById("teste");
//     div.style.backgroundColor = "red"; 

// }

// function voltaCor(){
//     let div = document.getElementById("teste");
//     div.style.backgroundColor = 'blueviolet';
// }


// function addTexto(){
//     let p = document.getElementById("teste");
//     p.append('O mouse moveu<br>');
// }


// let nome = prompt('Digite Seu Nome: ')
// let alt = prompt('Digite Sua Altura [cm]: ')
// let peso = prompt('Digite Seu Peso [kg]: ')

// let imc = parseFloat(peso)/(parseFloat(alt)/100) **  2

// let result = null

// if (imc > 40){
//     result = 'Obesidade grau III'
// }
// else if (imc >= 35 && imc < 39.99){
//     result = 'Obesidade grau II'
// }   
// else if (imc >= 35 && imc <= 39.99){
//     result = 'Obesidade grau II'
// }   
// else if (imc >= 30 && imc <= 34.99){
//     result = 'Obesidade grau I'
// }   
// else if (imc >= 25 && imc < 29.99){
//     result = 'Sobrepeso'
// }
// else if (imc >= 18.50 && imc <= 24.99){
//     result = 'Peso Normal'
// }
// else if (imc >= 17 && imc < 18.49){
//     result = 'Baixo Peso'
// }   
// else if (imc >= 16 && imc < 16.99){
//     result = 'Baixo peso grave'
// }   
// else{
//     result = 'Baixo peso muito grave'
// }         


// document.write(`${nome} possui índice de massa corporal igual a ${imc},
// sendo classificado como ${result}.`)



// let saud = function(nome) {
//     document.write('Olá ' + nome);
// }
// saud('Vinicius')


// Funções de CallBack: Funções que chamam funções
// var callbackSucesso = function(titulo, descricao) {
//     document.write('<h1>' + titulo + '</h1>')
//     document.write('<hr>')
//     document.write('<p>' + descricao +'</p>')
// }

// var callbackErro = function(erro) {
//     document.write('<p><b>Erro: </b>' + erro + '</p>')
// }

// function exibirArtigo(id, callbackSucesso, callbackErro){

//     if(id){
//         callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas em JS');

//     }
//     else{
//         callbackErro('Erro ao recuperar os dados');
//     }



// }

// exibirArtigo(true, callbackSucesso, callbackErro)

// let soma = (a, b) => a+b

// console.log(soma(12, 3))




// const a = [1, 2, 4, 6]

// console.log(a.pop())
// console.log(a.unshift(100))
// console.log(a.shift())
// console.log(a.push(123))
// console.log(delete a[0])

// a[0] = 'banana'
// console.log(delete a[0])

// console.log(a.splice(0, 1, 1000))

// console.log(a)


// let x = 10.380


// var data = new Date()

// // console.log(data.setFullYear(2024, 02, 27))
// // console.log(data.getDate() + '/0' + data.getMonth() + '/' +  data.getFullYear())
// // console.log()
// // console.log()

// // console.log(data.toString())
// // console.log(data.setDate(31))
// // console.log(data.toString())
// // console.log(data.setMonth(12))


// // 15/01/2017
// let date1 = new Date(2017, 01, 15)

// 23/01/2017

// let date2 = new Date(2017, 01, 23)


// console.log(date1)
// console.log(date2)

// // converter para algo que possamos calcular

// console.log(date1.getTime())
// console.log(date2.getTime())


// console.log(Math.round(Math.abs((date1.getTime() - date2.getTime()))/86400000))

// function calcular(n1, n2, operacao){
//     if (operacao == '+') return parseInt(n1) + parseInt(n2);
//     else return parseInt(n1) - parseInt(n2);
    
// }

// let op = prompt('Digite Sua Operação?')

// op = op.split(' ')



// console.log(op)

// let result = calcular(op[0], op[2], op[1])

// document.write(` O resultado é ${result}`)


// function clicar(){
//     alert('Clicou')
// }

// function mudarCor(){
//     let div = document.getElementById("teste");
//     div.style.backgroundColor = "red"; 
// }
// function mudarCor2(){
//     let input = document.getElementById("input");
//     input.style.backgroundColor = "gray"; 
// }


// function mudarCor3(){
//     let input = document.getElementById("input");
//     input.style.backgroundColor = "red"; 
// }



// function validarDigito(){

//     // Selecionar campo digitado
//     let a = document.getElementById('entrada').value;

//     // Limpar campo 
//     document.getElementById('entrada').value ='';
    
//     // Limpar espaços em branco nas extremidade da string
//     a = a.trim()

//     switch(a){
//         case '0':
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//             // Adicionar no campo Números
//             document.getElementById('num').value += a;
//             break;
//         default:
//             // Adicionar no campo caracteres
//             document.getElementById('letra').value += a;
//     }
// }

// function limpar(){
//     document.getElementById('num').value = '';
//     document.getElementById('letra').value = '';
// }

// function mudaCor(corFundo){
//     let cor = document.getElementById('div')
//     cor.style.backgroundColor = corFundo
//     cor.style.width = '100px'
//     cor.style.height = '100px'
// }

// function mudaClasse(){
//     document.getElementById('div').className = 'estilo2';
// }


// function mudaCor(){
//     let a = document.getElementById('campo');
//     a.style.backgroundColor = 'yellow';
// }

// function voltar(){
//     let b = document.getElementById('campo');
//     b.style.backgroundColor = 'blue';
// }

// function validaCampo(){
//     let c = document.getElementById('campo')
//     if(c.value.length <= 3){
//         c.style.backgroundColor = 'red';
//     }
//     else{
//         c.style.backgroundColor = 'green';
//     }
// }