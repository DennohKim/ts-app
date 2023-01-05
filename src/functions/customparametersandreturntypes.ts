enum AgeUnit  {
    years = "years",
    months = "months",
    days = "days",

}

type Person5 = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    country: string;
}

let Chizaa: Person5 = {
    name: "Chizaa",
    age: 32,
    ageUnit: AgeUnit.years,
    country: "China"

}


function convertAgeToMonths (person: Person5): Person5 {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;
    return person;

}