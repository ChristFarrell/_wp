const countLetters = (x) => {
    const map = new Map();
    for (const char of x){
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
};

const x = "banana";
console.log(countLetters(x)); 