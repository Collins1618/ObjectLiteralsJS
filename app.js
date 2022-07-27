//Object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'cystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

//update a property on an object
user.age = 35;
console.log(user.age);

//another way of accessing object properties
//square braacket notation
console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name'])