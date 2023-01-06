enum AgeUnit2  {
    years = "years",
    months = "months",
    days = "days",

}

//Function Call signature - used when defining methods
type greetingFunction = (greeting: string) => string;

type Person6 = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    country: string;
    greet: greetingFunction;
}

let Chizaa38: Person6 = {
    name: "Chizaa",
    age: 32,
    ageUnit: AgeUnit.years,
    country: "China",
    greet: (greeting: string) => {
        return `${greeting} ${Chizaa38.name}`;
    }

}

console.log(Chizaa38.greet("hello"));

function convertAgeToMonths (person: Person6): Person6 {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;
    return person;

}