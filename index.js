function theBeatlesPlay (musicians, instruments) {
  var musiciansAndInstruments = [];
  for(let i = 0; i < musicians.length; i++) {
    musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  };

  return musiciansAndInstruments
};

function johnLennonFacts(facts) {
  let i = 0
  while(i < facts.length) {
    facts[i] += "!!!"
    i++
  };

  return facts;
};

function iLoveTheBeatles(num) {
  var loveDeclaration = [];
  do {
    loveDeclaration.push("I love the Beatles!")
    num++
  } while (num < 15);

  return loveDeclaration;
};
