function deepMerge(obj1, obj2){
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
                if (!obj1[key] || typeof obj1[key] !== 'object' || Array.isArray(obj1[key])) {
                    obj1[key] = {};
                }
                deepMerge(obj1[key], obj2[key]);
            } else {
                obj1[key] = obj2[key];
            }
        }
    }
    return obj1;
}

const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));
