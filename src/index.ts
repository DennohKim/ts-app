//Union type needs to have all of the properties of one of the types

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

//join the union using  a pipe
type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

let dogAndCat: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
  purrs: false,
};
