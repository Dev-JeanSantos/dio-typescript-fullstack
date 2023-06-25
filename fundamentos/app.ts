const soma = (a: number, b: number) => {
console.log(a+b)
}

soma(1,2)


//TIPOS DE VARIAVEIS
var a = 'a'   //escopo global
let b = 'b'   //mutavel
const c = 'c' //imutavel

//TIPOS PRIMITIVOS
let x: string = 'x'
let z: number = 30
let y: boolean = true

//VARIAVL PODE ASSUMIR DOIS TIPOS
let m: string | number = 2

//ANY (generics)
let h: any = 100

//OBJETOS
interface Pessoa{
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'Tadeu',
    idade: 100 
}
const pessoa2: Pessoa = {
    nome: 'Marta',
    idade: 48,
    profissao: 'Mecanico'
}

//DCLARAÇÃO DE ARRAYS
const arrayPessoas: Pessoa[]=[
    pessoa, pessoa2
]

const arrayPessoas2: Array<Pessoa>=[
    pessoa, pessoa2
]

