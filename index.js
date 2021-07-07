var beatlesPairs = [];


var i;



function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < 4; i++) {
    beatlesPairs[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return beatlesPairs
}


function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
    newFacts[i] = `${facts[i]}!!!`
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++;
  }
  while (n < 15) {
}
return love
}






// add solution here