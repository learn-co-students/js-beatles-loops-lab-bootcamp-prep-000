function theBeatlesPlay(musicians, instruments) {
  var newBeatlesPlay = []
  const i = 0
  for(let i = 0; i < musicians.length; i++) {
  newBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return(newBeatlesPlay);
}


function johnLennonFacts(facts) {
  var excitingFacts = []
  let i = 0;
  while (i < facts.length) {
    excitingFacts.push(facts[i] + '!!!')
    i++;
  }
  return(excitingFacts)
}

function iLoveTheBeatles(num) {
  var beatlesRule = []
  do {
    beatlesRule.push("I love the Beatles!");
    num++
  }
  while (num > 0 && num < 15);
  return(beatlesRule)
}