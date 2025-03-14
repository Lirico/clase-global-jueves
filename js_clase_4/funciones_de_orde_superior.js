/****** FUNCIONES DE ORDEN SUPERIOR ******/
/* 
    Es un tipo de funcion que recibe otra funcion como argumento.
*/

// function saludar(usuario){
//     return `Hola ${usuario}`
// }
// function despedir(usuario){
//     return `Adios ${usuario}`
// }

// function crearSaludo(usuario, saludo){
//     return saludo(usuario)
// }

// console.log(crearSaludo("Jorge", saludar))

// const frutas = ["Mora", "Frutilla","Banana","Pera","Manzana","Melon"]

// console.log(frutas.filter(fruta => fruta.length === 7))



// Quiero obtener un nuevo arreglo que contenga solo las frutas con 4 letras.

// function filter(arreglo, condicion) {
//     const nuevoArr = []

//     for (let i = 0; i < arreglo.length; i++) {
//         if(condicion(arreglo[i])){
//             nuevoArr.push(arreglo[i])
//         }
//     }

//     return nuevoArr
// }

// const numeros = [1,2,3,4,5,6,7,8,9]

// console.log(filter(frutas, elemento => elemento.length === 4 ))
// console.log(filter(frutas, elemento => elemento.length === 7 ))
// console.log(filter(numeros, elemento => elemento > 5 ))

const frutas = ["Mora", "Frutilla","Banana","Pera","Manzana","Melon"]

/* 
    .filter() -> Devuelve un nuevo arreglo con los elementos que pasaron la condicion
    .find() -> Devuelve el primer elemento que haya paso la condicion
    .forEach() -> Recorre un arreglo y ejecuta una accion o varias a cada posicion. No devuelve nada.
    .map() -> Recorre un arreglo, ejecuta accciones en cada posicion y al final retorna un nuevo arreglo.
    .reduce() -> Recorre un arreglo y va operando sobre todos los elementos hasta que devuelve un unico valor.
*/

// console.log(frutas.find(fruta => fruta.length === 4))

console.log(frutas.forEach(fruta => `${fruta} podrida.`))

console.log(frutas.map(fruta => `${fruta} podrida.`))

// function forEach(arreglo){
//     for (let fruta = 0; fruta < arreglo.length; fruta++) {
//         // console.log(`${arreglo[fruta]}`)
//     }
// }

// console.log(forEach(frutas))

// function map(arreglo){
//     const nuevoArr = []

//     for (let fruta = 0; fruta < arreglo.length; fruta++) {
//         nuevoArr.push(`${arreglo[fruta]} podrida`) 
//     }

//     return nuevoArr
// }

// console.log(map(frutas))




