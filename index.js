let facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts){
  var n = 0;
  while (n < facts.length){
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts
}




function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (let i = 0; musicians.length > i; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

/*
function theBeatlesPlay(musicians, instruments) {
  const arr = [];
  for (let i = 0; musicians.length > i; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

*/

function iLoveTheBeatles(n){
  var empty = [];
  do {
  empty.push('I love the Beatles!');
  n++;
  }
  while(n < 15);
  return empty
}

/*


function iLoveTheBeatles(number) {
  const arr = [];
   
  do {
    arr.push(`I love the Beatles!`)
    number++
  }
  while(number < 15)
    
  return arr
    
}
*/