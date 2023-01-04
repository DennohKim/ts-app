let number3: readonly number[] = [1,2,3]

number3.push(2)

type readOnlyPerson = readonly[string, string, number]

let chizaa: readOnlyPerson = ["denno", "kim", 25]

type hero = Readonly<string[]>;

//tuple
type tyler = Readonly<[string, string, number]>