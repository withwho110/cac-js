const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes[3][1])
const allheroes=marvel_heroes.concat(dc_heroes)
//console.log(allheroes);
const all_new_heroes=[...marvel_heroes,...dc_heroes]
//console.log(all_new_heroes);
console.log(Array.isArray("Vidhu"));
console.log(Array.from("Vidhu"));
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))