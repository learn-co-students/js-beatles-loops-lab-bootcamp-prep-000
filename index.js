

var theBeatlesPlay = (musicians, instruments) => {
  var plays = [];
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return plays
}


function johnLennonFacts(facts)  {
  var hypedFacts = [];
  for (var i = 0; i < facts.length; i++) {
    hypedFacts.push(`${facts[i]}!!!`)
  }
  return hypedFacts
}

function iLoveTheBeatles(num) {
  var lovelist = [];
  var count = 0;
  do {
    lovelist.push("I love the Beatles!");
    count++;
  } while (count <= num && num < 15);

  return lovelist
}
