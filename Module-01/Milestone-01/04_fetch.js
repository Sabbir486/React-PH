const obj = {
    name2: 'hero',
    age2: 40,
    friends2: ['bd', 'cn', 'rahim'],
    family: {
        faName: 'nur',
        moName: 'mono'
    }
}

// Convert into json Data
const jsonData = JSON.stringify(obj);
console.log(jsonData);

// from json Data to Object
const planData = JSON.parse(jsonData);
console.log(planData);


//fetch

// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))


// key:value pair

const obj3 = {
    name3: 'hero',
    age3: 40,
    friends3: ['bd', 'cn', 'rahim'],
    family3: {
        faName3: 'nur',
        moName3: 'mono'
    }
}

const keys = Object.keys(obj3);
console.log(keys);

const values = Object.values(obj3);
console.log(values);




