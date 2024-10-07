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

    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, becuase on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza , risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)
        sum += Number(numbers[i])
    console.log(sum);
}

// Short-circuiting with OR (||) operator:
// OR (||) returns the first truthy value it finds or the last value if none are truthy.
// In this case, 3 is truthy, so 'Jonas' is ignored.
console.log(3 || 'Jonas'); // Output: 3

// Here, the first value is an empty string (falsy), so 'Jonas' is returned.
console.log('' || 'Jonas'); // Output: Jonas

// The first truthy value, true, is returned, so 0 is ignored.
console.log(true || 0); // Output: true

// Both undefined and null are falsy, so null is returned, which is the last falsy value.
console.log(undefined || null); // Output: null

// This will evaluate each value from left to right and return the first truthy value, which is 'Hello'.
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Output: Hello

// Using OR (||) to provide a default value if `restaurant.numGuests` is falsy:
// restaurant.numGuests is 23 (truthy), so it returns 23 instead of 10.
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; 
console.log(guests1); // Output: 23

// This is a shorthand version using OR (||), where `restaurant.numGuests` is truthy, so 23 is returned.
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // Output: 23

// Short-circuiting with AND (&&) operator:
// AND (&&) returns the first falsy value it encounters, or the last value if all are truthy.
// 0 is falsy, so 'Jonas' is ignored.
console.log(0 && 'Jonas'); // Output: 0

// Here, 7 is truthy, so 'Jonas' is returned (since all values so far are truthy).
console.log(7 && 'Jonas'); // Output: Jonas

// AND evaluates from left to right and stops at the first falsy value, in this case, `null`.
console.log('Hello' && 23 && null && 'jonas'); // Output: null

// Practical example of short-circuiting with AND (&&):
// If the `orderPizza` function exists (truthy), it gets called.
// This avoids an error if the function is undefined or falsy.
if (restaurant.orderPizza)
    restaurant.orderPizza('mushrooms', 'spinach');

// This is a shorthand using AND (&&), which works the same way.
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
