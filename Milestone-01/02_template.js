const fname = `Sabbir`;
const lname = 'Ahmed';
console.log(fname + lname);

// template string

console.log(`I am ${fname} ${lname}`);


//Arrow Function

// const add=(a,b) => a+b;

// console.log(add(10,15));

const add=(...rest) => {
    console.log(rest);
    
};

//this includes elements in array

add(1,2,3);


//spread operator --> ...

const number = [1,2,3,4,5,6];
console.log(...number);

const newNumber = [...number, 10, 100];
console.log(newNumber);


// Array Methods ***

// 1. const result = products.map(pro => pro.price);
//  console.log(result);  //Give an array

// 2. products.forEach(product => {
//     // Didn't give any return
// });

// 3. const result = products.filter(product => product.brand === 'apple');
// console.log(result);  //Give an array as a result

// 4. const result = products.find(product => product.name === 'apple1');
// console.log(result);  //Always return a single object


 





