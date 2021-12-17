function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);
var pizza3 = pizzaOven("hand tossed", "marinara", ["mozzarella"], ["pepperoni"]);
console.log(pizza3);
var pizza4 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["none"]);
console.log(pizza4);