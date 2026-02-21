// false value --> 0, -0, "", false, null, undefined
// truth value --> "abs", 1, {}, [], true

const test = {};

if(test){
    console.log("It's Truthy Value");
    
}

else{
    console.log("It's Falsy Value");
    
}

// Using Ternary Operator

test ? console.log('Truthy') : console.log("Falsy");


const isActive = false;

const showUser = () => console.log("Show User Green");
const hideUser = () => console.log("Hide User Red");


isActive ? showUser() : hideUser();

isActive && showUser();


// Js -> Type Conversion/ Quarsion

const num = "10";
console.log(typeof(num));

const result = num-2;
console.log(typeof(result));

// Convert to a value
console.log(parseInt(num));


