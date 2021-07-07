function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  if (musicians.length == instruments.length) {
   for (var c = 0; c < musicians.length; c++) {
     theBeatles.push(musicians[c] + ' plays ' + instruments[c]);
   } 
  }
  else;
  return theBeatles;
}

function johnLennonFacts(facts) {
  let c = 0;
  while (c < facts.length) {
    facts[c] = facts[c] + '!!!';
    c++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var tmi = [];
  do {
    tmi.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return tmi;
}