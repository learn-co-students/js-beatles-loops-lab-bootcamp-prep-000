// add solution here
function theBeatlesPlay(musicians,instruments){
  var array = [];
for (var i = 0; i < musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return array
}

function johnLennonFacts(facts) {
  let newFacts = [];
  let i = 0;
  while (i < facts.length){
    newFacts[i] = `${facts[i]}!!!`;
    i = i + 1;
  }
return newFacts;
}

function iLoveTheBeatles(number){
  let array = [];
  do {
    array.push (`I love the Beatles!`);
    number = number + 1;
  } while (number < 15);
  return array;
}
