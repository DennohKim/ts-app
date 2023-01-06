function intro3(name: string, age: number, country?: string): string {
    if(country){
        return `My name is ${name} and I am ${age} years old. I live in ${country}`;

    }
    return `My name is ${name} and I am ${age} years old.`;
    
  
}

//country is an optional parameter

console.log(intro3("john", 32))
console.log(intro3("john", 32, "Kenya"))