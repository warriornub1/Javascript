const restaurant = {
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

/*
Basic Array Destructuring
You can extract values from an array and assign them to variables in a single line.
*/
const arr = [2, 3, 4]
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4

// Skipping Elements
// You can skip elements in the array by leaving a space between commas.
let [first, , second] = restaurant.categories;
console.log(first, second); // 'Italian' 'Vegetarian'

// Swapping Variables
// With destructuring, you can easily swap variable values without needing a temporary variable.
[first, second] = [second, first]; // Values swapped


// Receiving Values from a Function
// Destructuring can be used to receive multiple return values from a function, especially when they are returned as an array.
console.log(restaurant.order(2, 0)); // ['Garlic Bread', 'Pizza']

// Nested Destructuring
// Arrays inside arrays can be destructured further.
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default Values
// You can assign default values to variables in case the array doesn’t have enough values.
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r); // 8 9 1