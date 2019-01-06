function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (let i = 0; i < musicians.length; i++){
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentences;
}

function johnLennonFacts(facts){
  var superFacts = [];
  var i = 0;
  while (i < facts.length){
    superFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return superFacts;
}

function iLoveTheBeatles(num){
  var beatlesLove = [];
  do {beatlesLove.push('I love the Beatles!'); num++;} while (num < 15);
  return beatlesLove;
}