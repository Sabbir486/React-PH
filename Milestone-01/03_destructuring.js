// for Array

const friend = ['hena', 'tina', 'rina', 'bd'];

// const element1 = friend[0];
// const element2 = friend[1];
// const element3 = friend[2];
// const element4 = friend[3];

const [element1, element2, element3, element4] = friend;

console.log(element1, element2, element3, element4);

console.log(element1 + element3);



// for Object

const person1 = {
    name1: 'sabbir',
    age1: 25,
    fri: ['bd', 'cd', 'ad'],
    country: 'Bangladesh'
}

const {name1, country, age1, fri} = person1;

console.log(name1);
console.log(fri);



