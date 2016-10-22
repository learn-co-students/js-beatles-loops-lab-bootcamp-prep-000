function theBeatlesPlay (musicians, instruments) {
  var beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
      beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesArray ;
}

function johnLennonFacts (facts)  {
  var newFacts = [];
  let i = 0;
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles (number)  {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    number++;
  }
  while (number < 15)
    return newArray
}
