const restaurant = { starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
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
        }
 };

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(menu);

for (const [i, el] of menu.entries()){
    console.log(`${i + 1}: ${el}`);
}