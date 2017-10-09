function theBeatlesPlay(musicians, instruments) {
  var ary = [];
  var arrayLength = musicians.length;
  for (var i = 0; i < musicians.length; i++) {
      ary.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return ary;
}

function johnLennonFacts(facts) {
  var newArray = [];
  var factsLength = facts.length;
  var i = 0;

  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`);
    i++;
  }

  return newArray;
}

function iLoveTheBeatles(numbz) {
  var emptyArry = [];

  do {
    emptyArry.push("I love the Beatles!");
    numbz++;
  } while (numbz < 15);

  return emptyArry;
}
