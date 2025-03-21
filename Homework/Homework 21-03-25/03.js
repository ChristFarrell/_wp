const sumArray = (arr) => {
    return arr.reduce((sum,x) => sum + x, 0);
}
console.log(sumArray([1, 2, 3, 4]));