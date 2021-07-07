// add solution here

const musicians = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo Starr'];
  
const instruments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums' ];
  
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}





function johnLennonFacts(facts) {
var facts2 = [];
var i = 0;
  while (i < facts.length) {
    facts2.push(facts[i] + "!!!");
    i++;
  }
  return facts2;
}




function iLoveTheBeatles(number) {
  var array = [];
  
  do {
    array.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  
return array;
}