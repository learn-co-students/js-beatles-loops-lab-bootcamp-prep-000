function theBeatlesPlay(musicians, instruments) {

var plays = [];

  for (let i = 0; i < 4; i++) {

    plays.push(`${musicians[i]} plays ${instruments[i]}`);
  }

return plays;
}


function johnLennonFacts(facts) {
var factsExclaimed = [];

  while(facts.length > 0) {
  factsExclaimed.push(`${facts[0]}!!!`);
  facts.splice(0,1);
  }

return factsExclaimed;

}


function iLoveTheBeatles(n) {
var emptyArray = [];

do {
    emptyArray.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return emptyArray;
}
