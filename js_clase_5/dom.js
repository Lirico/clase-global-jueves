/* DOM -> Document Object Model */



// console.log(document)
// console.log(document.doctype)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// console.log(document.section)
// console.log(document.body.section)


// SELECTORES
// Etiqueta -> .getElementsByTagName(elemento)
// Clase -> .getElementsByClassName(clase)
// Id -> .getElementById(id)

// console.log(document.getElementsByTagName('section'))
// console.log(document.getElementsByClassName('perritos'))
// console.log(document.getElementById('gatitos'))

// RASTREADORES UNIVERSALES
// Rastrea 1 -> querySelector()
// Rastrea todos -> querySelectorAll()

// console.log(document.querySelectorAll('section'))

// console.log(document.querySelectorAll('.perritos'))

// console.log(document.querySelector('#gatitos'))


// const $articulo = document.querySelector('#articulo');

// let texto = `
//     <p>
//         Lorem ipsum dolor <b>sit amet</b> consectetur 
//         <mark>adipisicing elit</mark>. Quisquam, nemo.
//     </p>
// `

// // $articulo.textContent = texto;
// $articulo.innerHTML = texto;
