
function theBeatlesPlay(musicians, instruments) {
let variable = [];
  for (let i = 0; i < musicians.length; i++) {
    variable.push(musicians[i] + ' plays ' +  instruments[i]);
  }
  return variable;
}


function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i]+'!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    ++number;
  }
  while (number < 15);
  return array;
}