
const d = document;

// const $lightDark = d.querySelector('.light_dark');
// const $insertP = d.querySelector('.insert_p');
// const $p = d.querySelector('p');

// const sumar = (a, b) => {
//     return a + b
// }

// $lightDark.addEventListener('click', () => d.body.classList.toggle("dark"))

// $insertP.addEventListener('click', () => {
//    const parrafo = prompt('Ingrese un parrafo: ')

//    $p.textContent = parrafo;
// })

// $insertP.addEventListener('click', () => {
//    $p.textContent = sumar(Number(prompt('Ingrese el parametro "a": ')), Number(prompt('Ingrese el parametro "b": ')))
// })

// manejar envio

// const $form = d.querySelector('form');
// const $username = d.querySelector('.username');
// const $email = d.querySelector('.email'); 
// const $usernameValidation = d.querySelector('.username_validation');
// const $emailValidation = d.querySelector('.email_validation');
// const $crucecita = d.querySelector('div');


// console.log('Base de Datos')

// $form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     if(!$username.value){
//         $usernameValidation.textContent = "*El nombre de usuario es obligatorio."
//         return;
//     } else {
//         $usernameValidation.textContent = ""
//     }

//     if(!$email.value){
//         $emailValidation.textContent = "*El correo electronico es obligatorio."
//         return;
//     } else {
//         $emailValidation.textContent = ""
//     }

//     console.log({
//         id: Date.now(),
//         username: $username.value,
//         email: $email.value
//     })
// })

// $crucecita.addEventListener('mouseover', () => {
//     const $p = d.createElement('p')
//     $p.textContent = 'La contrasenia debe tener entre 8 y 20 caracteres.'

//     document.body.appendChild($p);

//     $crucecita.addEventListener('mouseout', () => {
//         document.body.removeChild($p);
//     })
// })

const $mario = d.querySelector('.mario');


document.addEventListener('keypress', (event) => {
    // Counter Strike
    if(event.key === "w"){
        $mario.style.top = `${$mario.offsetTop - 50}px`;
    }
    if(event.key === "a"){
        $mario.style.left = `${$mario.offsetLeft - 50}px`;
    }
    if(event.key === "s"){
        $mario.style.top = `${$mario.offsetTop + 50}px`;
    }
    if(event.key === "d"){
        $mario.style.left = `${$mario.offsetLeft + 50}px`;
    }
})

document.addEventListener('click', () => {
    console.log('disparo')
})
document.addEventListener('contextmenu', () => {
    console.log('abrir mira')
})

