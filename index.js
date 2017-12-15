function theBeatlesPlay(musicians, instruments) {
  var skills = [];
  for (var i = 0; i < 4; i++) {
    skills.push(`${musicians[i]} plays ${instruments[i]}`);
  } return skills;
}



function johnLennonFacts(facts) {
  var exclaimedFacts = [];
  var index = 0
  while (index < facts.length) {
    exclaimedFacts.push(`${facts[index++]}!!!`)
  } return exclaimedFacts;
}

function iLoveTheBeatles(number) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    number++
  } while (number < 15);
    return myArray;
}
