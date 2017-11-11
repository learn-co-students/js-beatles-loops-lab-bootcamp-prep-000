const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var results = [];
  for (let i = 0; i < musicians.length; i++) {
     var s = `${musicians[i]} plays ${instruments[i]}`;
     results.push(s);
  }
  return results;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i]= facts[i] + "!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var sum = [];
  do {
    sum.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return sum;
}
