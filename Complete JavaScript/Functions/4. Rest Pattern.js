const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
    },
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = 20.00, address }){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    // Using REST operator to collect the remaining ingredients into an array
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient); // Logs the main ingredient
        console.log(otherIngredients); // Logs the rest of the ingredients as an array
    }
};

// SPREAD, because on the RIGHT side of =
// Spread operator takes elements from array and spreads them into individual elements
const arr = [1, 2, ...[3, 4]]; // Merges two arrays into a single array
console.log(arr); // Output: [1, 2, 3, 4]

// REST, because on the LEFT side of =
// Rest operator gathers remaining elements into an array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // Output: 1 2 [3, 4, 5]

// Another example of using rest with array destructuring
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza , risotto, otherFood); 
// Output: 'Pizza', 'Risotto', ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// REST operator with objects: gathers remaining properties into a new object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); 
// Output: {thu: {open: 12, close: 22}, fri: {open: 11, close: 23}}

// REST with functions: collects arguments into an array
const add = function (...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)
        sum += Number(numbers[i]);
    console.log(sum);
}

add(2, 3); // Output: 5
add(5, 3, 7, 2); // Output: 17

// Calling orderPizza with one main ingredient and other optional ingredients
restaurant.orderPizza('mushroom', 'onion', 'olives'); 
// Output: 'mushroom' ['onion', 'olives']

restaurant.orderPizza('mushroom'); 
// Output: 'mushroom' []
