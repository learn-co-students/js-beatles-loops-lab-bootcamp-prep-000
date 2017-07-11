function theBeatlesPlay(musicians, instruments){
  let pairs = [];
  for (let i = 0; i <= 3; i++ ) {
    pairs.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return pairs;
}

function johnLennonFacts(facts){
  let excited = [];
    facts.forEach(function(fact){
    excited.push( `${fact}!!!`)
  });
  return excited;
}

function iLoveTheBeatles(number){
  let array = [];
  do {
    number += 1
    array.push('I love the Beatles!')
  } while(number < 15);
  return array;
}
