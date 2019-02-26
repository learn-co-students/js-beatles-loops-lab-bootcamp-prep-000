function theBeatlesPlay(musicians, instruments) {
  var blank = [];
  for (let i = 0; i < 4; i++) {
    blank.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return blank;
}

function johnLennonFacts(facts) {
  let count = 0;
  var excitedFacts = [];
  while(count < facts.length){
    excitedFacts.push(`${facts[count]}!!!`);
    count++;
  } return excitedFacts;
}

function iLoveTheBeatles(num) {
  var hype = [];
  do {
    hype.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return hype;
}