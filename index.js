const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 5000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 15000,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 13500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 13800,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 10000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// ejercicio a🍕

// let nombreDePizzas = pizzas.filter((pizza) => pizza.id % 2 == 1);

// console.log(nombreDePizzas);
// let pizzasImPares = nombreDePizzas.map((pizza) => pizza.nombre);

// console.log("Las pizzas que tienen un id impar son: "+ pizzasImPares
// + ".");

//ejercicio b 🍕🍕
// const menor = pizzas.every(precio => precio.precio>600);
// if (menor == true) {
//   console.log("no hay pizzas con ese rango de precios");
// } else {
//   console.log("Si hay pizzas menores a $600");
// }

// ejercicio c🍕🍕🍕

// let nombrePizzas = pizzas.map(pizza=>"Nombre: "+ pizza.nombre +  ", precio: $" + pizza.precio);

// console.log(nombrePizzas);

//ejercicio d🍕🍕🍕🍕
pizzas.forEach((pizza) => {
  console.log(
    "La " + pizza.nombre+  ", tiene los siguientes ingredientes: "
      
  );
  pizza.ingredientes.forEach(pizza=>{
        
        console.log("> " + pizza)})

});
