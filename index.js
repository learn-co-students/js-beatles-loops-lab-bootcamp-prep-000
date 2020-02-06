// add solution here
function theBeatlesPlay(musician, instruments) {
  var array = [];
  for(var i = 0; i < musician.length; i++) {
    array[i] = (`${musician[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length){
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
     do {
     array.push('I love the Beatles!');
     n ++;
   } while (n < 15);
   return array;
}