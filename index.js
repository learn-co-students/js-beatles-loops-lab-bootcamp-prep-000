// add solution here
function theBeatlesPlay(musicians, instruments) {
  // creating an empty variable
  var statements = [];
  // for loop (iterating through musicians)
  for(var i = 0; i < musicians.length; i++) {
    statements.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return statements;

}

function johnLennonFacts(facts) {
  var num = 0;
  var formattedFacts = facts;
  while (num < facts.length) {
    formattedFacts[num] = facts[num].concat("!!!");
    num++;
  }

  return formattedFacts;

}

function iLoveTheBeatles(num) {
  var love = [];

  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return love;
}
