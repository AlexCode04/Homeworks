class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city; 
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.residents = []; 
    }

    addResident(person) {
        this.residents.push(person); 
    }
}

class Graph {
    constructor() {
        this.people = [];
        this.cities = {}; 
    }

    addCity(cityName) {
        if (!this.cities[cityName]) {
            this.cities[cityName] = new City(cityName);
        }
    }

    addPerson(name, age, cityName) {
        this.addCity(cityName); 
        const person = new Person(name, age, cityName);
        this.people.push(person);
        this.cities[cityName].addResident(person); 
    }

    printResidents(cityName) {
        const city = this.cities[cityName];
        if (city) {
            console.log(`Residents of ${cityName}:`);
            city.residents.forEach(resident => {
                console.log(`${resident.name}, Age: ${resident.age}`);
            });
        } else {
            console.log(`City ${cityName} not found.`);
        }
    }
}

const graph = new Graph();

graph.addPerson('Alice', 30, 'New York');
graph.addPerson('Bob', 25, 'New York');
graph.addPerson('Charlie', 28, 'Los Angeles');
graph.addPerson('Dave', 35, 'Chicago');
graph.addPerson('Eve', 40, 'Chicago');
graph.addPerson('Frank', 22, 'New York');


graph.printResidents('New York');
graph.printResidents('Chicago'); 
graph.printResidents('Los Angeles'); 
graph.printResidents('Miami');   
