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

const numero: number = 21
if(numero > 20){
    console.log('Maior')
}else{
    console.log('Menor')
}


const typerUser = {
    admin: 'Admin',
    student: 'Estudante',
    visitor: 'Visitante',
}

function validateUser(user: string){
    console.log(typerUser [user as keyof typeof typerUser])
}
validateUser('admin')
validateUser('student')
validateUser('visitor')

//ESTRUTURAS DE REPETIÇÃO
//FOR

for(let i = 0; i < 5; i+=2){
    console.log(i)
}


//WHILE
let n = 2
while(n < 6) {
    console.log(n)
    n++   
}


//ARRAY CRIAÇÃO
const array: Array<number> = [1,2,3,4]
const stringArray: Array<string> = ['a','b','c','d','e']

const array2: number[] = [1,2,3,4]
const stringArray2: string[] = ['a','b','c','d','e']

console.log(array[3])
console.log(array.length)
console.log(stringArray.length)
array.push(5, 6)
console.log(array.length)
stringArray.pop()
stringArray.pop()
console.log(stringArray.length)