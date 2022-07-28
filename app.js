//Object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'cystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    //the name of this method is login, and the value is what it does
    login: function(){
        console.log("the user logged in");
    },
    logout: function(){
        console.log("the user logged out");
    },
    logBlogs: function(){
        console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
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
console.log(user['name']);

//call the method described in the object
user.login();
user.logout();

//using this in a global context which is the window object
// console.log(this);
user.logBlogs();