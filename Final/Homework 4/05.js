class Dog {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return('Woof! I am ' + this.name);
    }
}
const dog = new Dog("Buddy");
console.log(dog.speak());