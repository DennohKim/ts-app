// let user: string;
// console.log(user)

// let saveButton = document.getElementById("save");
// console.log(saveButton);

let loggedInUsername: string;

const users = [
    {name: "obby", age: 12},
    {name: "hina", age: 22}
];

const loggedInUser = users.find((user: {name:string, age: number}) => user.name === loggedInUsername)

console.log(loggedInUser.age);


let saveButton: HTMLElement | null   = document.getElementById("save");
