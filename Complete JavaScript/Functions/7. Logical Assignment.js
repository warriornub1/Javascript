const rest1 = {
    name: 'Capri',
    numGuests: 20,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovannni Rossi',
};

// Using nullish assignment (??=):
// This operator assigns a value only if the current value is `null` or `undefined`.
// rest1.numGuest already has a value of 20, so it will not be assigned 10.
rest1.numGuest ??= 10; // No change, rest1.numGuest remains 20

// rest2.numGuest is `undefined`, so 20 will be assigned.
rest2.numGuest ??= 20; // rest2.numGuest becomes 20

// Using OR assignment (||=):
// This operator assigns a value only if the current value is falsy (e.g., 0, '', false, undefined).
// rest1.numGuest is 20 (truthy), so it will not be assigned 10.
rest1.numGuest ||= 10; // No change, rest1.numGuest remains 20

// rest2.numGuest is 20 (truthy), so it will not be assigned 20 again.
rest2.numGuest ||= 20; // No change, rest2.numGuest remains 20

// Using AND assignment (&&=):
// This operator assigns a value only if the current value is truthy.
// rest1.owner is `undefined`, so this will not execute and no value will be assigned.
rest1.owner &&= '<ANONYMOUS>'; // No change, rest1.owner remains undefined

// rest2.owner is 'Giovannni Rossi' (truthy), so it will be replaced with '<ANONYMOUS>'.
rest2.owner &&= '<ANONYMOUS>'; // rest2.owner becomes '<ANONYMOUS>'

console.log(rest1); // Output: { name: 'Capri', numGuests: 20 }
console.log(rest2); // Output: { name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 20 }
