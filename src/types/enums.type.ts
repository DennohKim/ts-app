import { Roles } from '../roles';


type Person3 = {
    name: string;

    email: string;

    password: string;

    role: Roles


};

let admin1: Person3 = {
    name: "chizaa",

    email: "chizaa@gmail.com",

    password: "dsireoew",

    role: Roles.admin
}

console.log(admin1)

