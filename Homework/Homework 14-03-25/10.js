let scores = { Alice: 85, Bob: 92, Charlie: 78 };
for(let name in scores){
    console.log(`${name} score is ${scores[name]}`);
}