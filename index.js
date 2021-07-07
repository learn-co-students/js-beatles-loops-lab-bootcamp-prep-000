// add solution here

function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
    for (var i = 0; i < 4; i++) {
      beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
      return beatlesArray;
}


function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
    return newFacts;
}


function iLoveTheBeatles(number) {
  var i = 0
  var newArray = []
  do {
    number = number + 1;
    i = i + 1;
    newArray.push("I love the Beatles!");
    i++;
  } while (number < 15);
return newArray;
}
