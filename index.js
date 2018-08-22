// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatlesMembers = [];
  for (let i = 0; i < musicians.length; i++) {
    beatlesMembers.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesMembers;
}

function johnLennonFacts(facts) {
  var i = 0;
  var extremeFacts = [];
  while (i < facts.length) {
    extremeFacts.push(facts[i] + "!!!");
    i++;
  }
  return extremeFacts;
}

function iLoveTheBeatles(number) {
  var moo = [];
  do {
    moo.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return moo;
}