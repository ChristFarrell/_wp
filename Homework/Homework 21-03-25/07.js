class Vector {
    constructor(components) {
        this.components = components;
    }

    add(vector) {
        const result = this.components.map((value, index) => value + vector.components[index]);
        return new Vector(result);
    }

    sub(vector) {
        const result = this.components.map((value, index) => value - vector.components[index]);
        return new Vector(result);
    }

    dot(vector) {
        return this.components.reduce((sum, value, index) => sum + value * vector.components[index], 0);
    }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

console.log(a.add(b)); 
console.log(a.sub(b));
console.log(a.dot(b));
