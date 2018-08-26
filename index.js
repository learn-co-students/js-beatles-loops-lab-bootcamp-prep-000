function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var music = []
  for (let i = 0; i < musiciansArray.length; i++) {
    music.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  } 
  return music
}
function johnLennonFacts(facts) {
 let i = 0; 
 while (i < facts.length) {
 facts[i] = facts[i] + '!!!'
 i++;
 }
return facts
}
function iLoveTheBeatles(number) {
  var empty = [];
  do {empty.push("I love the Beatles!"); 
    number++;
  }
  while (number < 15)
  return empty
}