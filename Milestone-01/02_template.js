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





