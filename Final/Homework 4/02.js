const uniqueSorted = (arr) => {
    const uniqueArray = [...new Set(arr)];
    uniqueArray.sort((a,b) => a-b);
    return uniqueArray;
};

console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8]));
