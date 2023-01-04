type CatTwo = {
    name: string;

    purrs: boolean;

    color: string;
}

type DogTwo = {
    name: string;

    barks: boolean;

    color: string;
}

type HybridAnimal = CatTwo & DogTwo;

let hybridAnimal: HybridAnimal = {
    name: "Max",
    color: "White",
    barks: true,
    purrs: true


}





