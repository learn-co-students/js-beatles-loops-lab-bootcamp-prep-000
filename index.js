function theBeatlesPlay(musicians, instruments) {
  var beatlesRoles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesRoles.push( `${musicians[i]} plays ${instruments[i]}` );
  }
  return beatlesRoles;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arrayOfFacts) {
  var exclaimedFacts = [];
  var counter = 0;
  while (counter < arrayOfFacts.length) {
    exclaimedFacts.push( `${arrayOfFacts[counter]}!!!` );
    counter += 1;
  }
  return exclaimedFacts;
}

function iLoveTheBeatles(number) {
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return beatlesLove;
}
