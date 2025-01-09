//console.log("a :"+a);
//console.log("a :"+a);

let a=10;
const b=20;
console.log("a :"+a);
console.log("b :"+b);

//let a=20;
//const b=30;
console.log("a :"+a);
console.log("b :"+b);

a=20;
//b=30;
console.log("a :"+a);
console.log("b :"+b);

function fun(){
    let c=30;
    const d=40;
    console.log("c:"+c);
    console.log("d:"+d);
}
fun();
//console.log(c);
//console.log(d);





const parent = {
    greet: function () {
      console.log("Hello from the parent object!");
    }
};

const child = Object.create(parent);

child.sayHi = function () {
    console.log("Hi from the child object!");
};

child.greet();
child.sayHi();



class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);  
        this.color = color;
    }

    speak() {
        console.log(`${this.name} meows!`);
    }
}

const kitty = new Cat("Whiskers", "Black");

console.log(kitty.name);
kitty.speak();                









// 1. Creating an Object
const person = {
    name: "John Doe",
    age: 30,
    job: "Software Developer",
    greet() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.job}.`);
    },

    increaseAge() {
        this.age += 1;
    },
   
    getInfo() {
        return `${this.name}, Age: ${this.age}, Job: ${this.job}`;
    }
};

// 2. Accessing Object Properties
console.log(person.name);  
console.log(person.age);   
console.log(person.job); 

// 3. Calling an Object Method
person.greet(); 

// 4. Modifying Object Properties
person.age = 31; 
console.log(person.age); 

// 5. Using 'this' to access object properties
person.increaseAge();  
console.log(person.age);  // Output: 32

// 6. Object Destructuring (Extracting values into variables)
const { name, age, job } = person;
console.log(name);  // Output: John Doe
console.log(age);   // Output: 32
console.log(job);   // Output: Software Developer

// 7. Using Object Spread Syntax (Cloning and Merging Objects)
const newPerson = { ...person };  // Cloning the 'person' object
newPerson.name = "Jane Smith";  // Modify the cloned object

console.log(person.name);   // Output: John Doe (original object)
console.log(newPerson.name);  // Output: Jane Smith (modified cloned object)

// 8. Adding New Properties to an Object
person.address = "1234 Elm Street";  // Adding a new property
console.log(person.address);  // Output: 1234 Elm Street








const person = {
    name: 'John Doe',
    age: 30,
    job: 'Developer',
  };
  
  const { name, age, job } = person;
  console.log(name); 
  console.log(age); 
  console.log(job);
  
  
  const { name: fullName, age: personAge } = person;
  console.log(fullName); 
  console.log(personAge); 
  
  
  const numbers = [10, 20, 30, 40];
  const [first, second, , fourth] = numbers; 
  console.log(first);  
  console.log(second); 
  console.log(fourth); 
  
  
  const { country = 'USA' } = person; 
  console.log(country);  
  