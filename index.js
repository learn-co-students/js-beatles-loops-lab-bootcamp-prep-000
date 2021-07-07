// add solution here
function theBeatlesPlay(musicians, instruments) {
  const foo = []
  for (var i = 0, l = musicians.length; i < l; i++) {
    foo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return foo
}

function johnLennonFacts (facts) {
  var checkedFacts = [];
  var i = 0;
  while (i < facts.length) {
    checkedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return checkedFacts
}

function iLoveTheBeatles (number) {
  var foo = [];
  do {
    foo.push("I love the Beatles!");
    number ++;
  } while (number < 15);
  return foo
}
