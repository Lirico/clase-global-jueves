



const d = document;

const $cards = d.querySelector('.cards');


const pokemons = [
    {
        img: "https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif?resize=480%2C342&ssl=1",
        title: "Pikachu",
        type: "Electric",
        bgColor: "yellow"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/it/archive/4/43/20120529174523%21Bulbasaur.png",
        title: "Bulbasaur",
        type: "Plant/Venom",
        bgColor: "green"
    },
    {
        img: "https://freepngimg.com/thumb/pokemon/117717-charmander-png-image-high-quality-thumb.png",
        title: "Charmander",
        type: "Fire",
        bgColor: "orange"
    },
    {
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8355c42b-bec4-426e-a0fa-f39523ea6c02/da74aa6-367253cd-ef9e-41fe-83df-64b857675335.png/v1/fill/w_848,h_720/vamo_a_calmarno_render_by_taringamemes_da74aa6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODM1NWM0MmItYmVjNC00MjZlLWEwZmEtZjM5NTIzZWE2YzAyXC9kYTc0YWE2LTM2NzI1M2NkLWVmOWUtNDFmZS04M2RmLTY0Yjg1NzY3NTMzNS5wbmciLCJ3aWR0aCI6Ijw9ODQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZNF3N5MBYnZKSWpRRuWvSYFLbTvxacfR439C1L60lDk",
        title: "Squirtle",
        type: "Water",
        bgColor: "blue"
    },
    {
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png",
        title: "Pidgeotto",
        type: "Flying/Normal",
        bgColor: "gold"
    },
]

pokemons.forEach(pokemon => {
    // Creacion de elementos
    const $card = d.createElement('div'), 
        $cardImg = d.createElement('img'),
        $cardTitle = d.createElement('h3'),
        $cardDescription = d.createElement('p');
    
    // Insercion de elementos
    $cards.appendChild($card);
    $card.appendChild($cardImg);
    $card.appendChild($cardTitle);
    $card.appendChild($cardDescription);
    
    // Insercion de atributos y contenido
    $card.className = 'card';
    $cardImg.src = pokemon.img;
    $cardImg.alt = 'Pokemon';
    $cardImg.width = 150;
    $cardTitle.textContent = pokemon.title;
    $cardDescription.textContent = pokemon.type

    // Insertando CSS
    $card.style.backgroundColor = pokemon.bgColor;
})



// Recorriendo una base de datos!

// const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];

// const $ul = d.createElement('ul');

// d.write('<h3>Estaciones del anio</h3>')

// estaciones.forEach(estacion => {
//     // Crear un li
//     const $li = d.createElement('li');
//     // Insertar la posicion del array en dicho item
//     $li.textContent = estacion;
//     // Insertar el li en la ul
//     $ul.appendChild($li);
// })

// d.body.appendChild($ul);