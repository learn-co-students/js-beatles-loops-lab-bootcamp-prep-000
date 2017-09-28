const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (let i=0; i<musicians.length; i++) {
    list.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return list;
}

function johnLennonFacts(facts) {
  let i = facts.length - 1;
  while (i >= 0) {
    facts[i] += '!!!';
    i--;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return arr;
}
