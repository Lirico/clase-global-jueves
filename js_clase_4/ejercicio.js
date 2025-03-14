

const products = [
    {id: 1, name: "Producto A", price: 10},
    {id: 2, name: "Producto B", price: 20},
    {id: 3, name: "Producto C", price: 30},
    {id: 4, name: "Producto D", price: 40}
]

console.log("-- CARRITO --")

function dispararId(id){
   const newItem = products.find(product => product.id == id)

   console.log(newItem)
}


