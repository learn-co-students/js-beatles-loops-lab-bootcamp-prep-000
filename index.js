function theBeatlesPlay(musicians, instruments){
  var band = []
  for(let i=0; i<musicians.length; i++){
    band.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return band
}

function johnLennonFacts(facts){
  var exclamation = []
  for(let i=0; i<facts.length; i++){
    exclamation.push(`${facts[i]}!!!`)
  }
  return exclamation
}

function iLoveTheBeatles(n){
  var beatlesReview = []
  do {
    beatlesReview.push(`I love the Beatles!`);
    n++;
  } while (n<15);
  return beatlesReview
}
