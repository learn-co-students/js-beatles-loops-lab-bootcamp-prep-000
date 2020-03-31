// add solution here
function theBeatlesPlay(musicians,instruments){
  var talent = [];
  for(let i = 0; i < musicians.length; i++){
    talent.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return talent;
}

function johnLennonFacts(facts){
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var beatlesLover = [];
  do {
    beatlesLover.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return beatlesLover;
}
