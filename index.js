function theBeatlesPlay(musicians,instruments){
  var beatles = [];
  for (var i = 0; i < musicians.length; ++i){
    beatles[i]=`${musicians[i]} plays ${instruments[i]}`
  }
  return beatles;
}

function johnLennonFacts(facts){
  var lennonFacts = [];
  for(var lennon in facts){
    lennonFacts.push(`${facts[lennon]}!!!`)
  }
  return lennonFacts
}

function iLoveTheBeatles(number){
  const msg = 'I love the Beatles!'
  var beatles = [];
  ++number;
  if (number >= 15){
    beatles.push(msg)
    return beatles;
  } else {
    do {
      beatles.push(msg);
      number--;
    } while (number !== 0)
    return beatles
  }
}
//console.log(iLoveTheBeatles(7));
