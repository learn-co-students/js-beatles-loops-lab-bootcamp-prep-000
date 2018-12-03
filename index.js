// add solution here
function theBeatlesPlay(musicians, instruments) {
  var instrumentsPlayedBy = [];

for (var i = 0; i < musicians.length; i++) {
      instrumentsPlayedBy.push(musicians[i] + " plays " + instruments[i])
  }
return instrumentsPlayedBy;
}

function johnLennonFacts() {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

  var i = 0;
  var shoutFacts = [];

  while (i < facts.length) {
    shoutFacts.push(facts[i] + "!!!");
    i++;
  }
  return shoutFacts;
}
