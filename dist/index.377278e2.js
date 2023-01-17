class Person {
    //fires whenever new instance is created
    constructor(name, email){
        //this referes to name of the class
        this.name = name;
        this.email = email;
    }
    //functions are referred to as methods
    greet() {
        return `Hello ${this.name}`;
    }
}
//person 4 is an instance of Person
const person4 = new Person("chizaa", "chizaa@gmail.com");
const person5 = new Person("matt", "matt@gmail");
console.log(person4); // console.log(person4.name);

//# sourceMappingURL=index.377278e2.js.map
