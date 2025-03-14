/**** OBJETOS ****/

// Colecciones compuestasa por sistemas de clave - valor
// Usamos objetos para representar elementos de la realidad, o bien, de la ficcion.

// const detective = { 
//     nombre: "Sherlock Holmes", 
//     edad: 60, 
//     genero: "Masculino",
//     intereses: ["Boxeo", "Violin", "Opio"],
//     decirFrase: function(nombre) {
//         return "Elemental mi querido/a " + nombre + "!"
//     }
// };

// // Bracket notation
// console.log(detective["genero"].masculino)

// // Dotwalking
// console.log(detective.nombre)

// function agregarPropiedad(objeto, propiedad, valor){
//     objeto[propiedad] = valor
// }

// agregarPropiedad(detective, "id", 1287381273)

// console.log(detective.decirFrase("Lean"))

const productos = [
    {id: 1, name: "Xayah", price: "10"},
    {id: 2, name: "Garen", price: "20"},
    {id: 3, name: "Twitch", price: "30"},
    {id: 4, name: "Yasuo", price: "40"},
    {id: 5, name: "Nasus", price: "50"}
]

function crearTarjetas(listaProductos){
    for(let i = 0; i < listaProductos.length; i++){
        console.log(`
                ${listaProductos[i].name}
                  ${listaProductos[i].price}
                - 0 +
                AGREGAR
        `)
    }
}

crearTarjetas(productos)

