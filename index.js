function theBeatlesPlay(musicans, instruments) {
  var str = [];
  for (var i = 0; i < musicans.length; i++) {
    str.push(musicans[i] + " plays "+ instruments[i]);
  }

  return str;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var results = [];
  do {
    results.push("I love the Beatles!");
    num -= 1;
  } while (num < 15 && num >= 0)

  return results;
}
