console.log('Interfaces');

interface PersonInterface {
    name: string;
    // Optional
    age?: number;
    // Unknown prop name
    [propName: string]: any;
}


const person = {
    name:"Sheldon",
    age:40, //Optional
    job:"physicist" //unknown property.
}

function logPerson(person: PersonInterface){
    console.log(person);
}

logPerson(person);