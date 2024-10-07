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

    // Define methods inside an object using function expressions
    // If starterIndex or mainIndex is missing, default values of 1 and 0 will be used, respectively.
    orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = 20.00, address }){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
    },

};

// You can pass an object to a function and destructure the properties inside the function parameters
// Destructuring starterIndex, mainIndex, time, and address from the passed object in the function.
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});


// You can provide default values while destructuring in function parameters.
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
});

// Destructures name, openingHours, and categories from restaurant object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// You can rename variables during destructuring.
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);



// If a property doesn't exist, a default value can be assigned.
const { menu = [], starterMenu: starters1 = [] } = restaurant;
console.log( menu, starters1 );

// When variables are already declared, you can mutate them using destructuring.
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }; 
// Parentheses are required when mutating already declared variables.
({a, b} = obj);
console.log(a, b);

// You can destructure nested objects.
// Destructures the nested open and close properties from fri inside openingHours
const { fri: { open: o, close: c }, } = openingHours;
console.log(o, c);