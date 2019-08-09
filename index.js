// add solution here
function theBeatlesPlay(musicians, instruments) {
  var new_array = []
  for (var i = 0; i < musicians.length; i += 1) {
    new_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return new_array
}

function johnLennonFacts(facts) {
  var i = 0
  var new_facts = []
  while (i < facts.length) {
    new_facts.push(`${facts[i]}!!!`)
    i += 1
  }
  return new_facts
}

var i = 0
function incrementVariable() {
  i = i + 1;
  return i;
}

function iLoveTheBeatles(number) {
  var new_array = []
  do {
    new_array.push('I love the Beatles!');
  }
  while (incrementVariable() < 15 - number)
  return new_array
}