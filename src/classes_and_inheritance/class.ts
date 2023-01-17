// let person = {
//     name: 'John',
//     email: 'john@example.com',
//     greet: () => console.log(`Hello ${person.name}`),

// }

class Person {
    //property of a class
    name = 'John';
    email = 'john@example.com';

    //functions are referred to as methods
    greet() {
        return `Hello John`
    }

}

//person 4 is an instance of Person
const person4 = new Person();
const person5 = new Person();

console.log(person4);

console.log(person4.name);

