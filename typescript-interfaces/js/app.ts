console.log('Interfaces');

interface PersonInterface {
    name: string;
    // Optional
    age?: number;
    getAge(): number;
    // Unknown prop name
    [propName: string]: any;
}

const person: PersonInterface = {
    name: "Sheldon",
    age: 40, //Optional
    job: "physicist", //unknown property.
    getAge(): number {
        return (this.age) ? this.age : 0;
    },
    test: 10,
}

function logPerson(person: PersonInterface) {
    console.log(person);
}

logPerson(person);

// without "Unknown prop name" declaration  this litral will throw error.
logPerson({ name: "Sheldon", unkonwn: "", getAge() { return 0 } });
//But this will not throw error only literals are validated up front
const obj={ name: "Sheldon", unkonwn: "", getAge() { return 0 } };
logPerson(obj);


class anotherPerson implements PersonInterface {

    job: string = "Engineer";

    constructor(public name: string,
        public age: number) {
    }
    getAge(): number {
        return (this.age) ? this.age : 0;
    }
}

console.log(new anotherPerson("Nallai", 27));