// let and const

let name = 'SAB';
 name = 'Sabbir';

 console.log(name);

// if-else condition

//array

const friends = ['hero', 'JRK', 'SRK', 'Rahim'];

friends.push('bd');
// friends.pop();
friends.unshift('cad');
// friends.shift();


console.log(friends);
console.log(friends.slice(2,4));
console.log(friends.splice(2,3));


// for loop

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element);
    
    
}


// function

function sum(a,b){
    console.log(...arguments);
    
    const result = a+b;
    // console.log(result);
    return result;
    
}

const output = sum(10,20)
console.log(output);


//object

const person = {
    name: 'sabbir',
    age: 10,
    frineds: friends
}

person.name = 'Rony';

console.log(person.name);
console.log(person.frineds[1]);





 