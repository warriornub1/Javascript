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
  
  // Method: Orders a starter and a main dish by their index in the respective menus
  order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Method: Orders food for delivery with destructuring and default parameters
  orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = 20.00, address }) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`);
  },

  // Method: Prepares pasta with 3 ingredients passed as arguments
  orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  }
};

// Spread Operator with Arrays
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // Old way: Manual extraction of elements
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // Spread operator: Expands arr into new array
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // Adding an item to the array without mutating original
console.log(newMenu);

// Copy an array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays into one
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread Operator with Strings (strings are iterable)
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; // Splits string into individual characters
console.log(letters);
console.log(...str); // Outputs each letter separately

// Spread operator with function arguments
let ingredients = ["Eggs", "Sausage", "Cheese"];
restaurant.orderPasta(...ingredients); // Spreads the array into individual arguments

// Spread Operator with Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }; // Copy restaurant and add new properties
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; // Shallow copy of an object
restaurantCopy.name = 'Ristorante Roma'; // Modifying copy, not affecting the original

console.log(newRestaurant.name); // Original name remains unchanged
console.log(restaurantCopy.name); // Copy's name is changed
