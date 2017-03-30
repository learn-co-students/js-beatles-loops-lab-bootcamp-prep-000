function theBeatlesPlay (musicians, instruments){
  var beatlesLoops = new Array
  for (var i = 0; i < musicians.length; i++){
    beatlesLoops.push(`${musicians[i]}`  + ' plays ' + `${instruments[i]}`)
  }
  return beatlesLoops;
}

function johnLennonFacts (facts){
  const factsNew = new Array
  var i = 0;
  while (i < facts.length) {
    factsNew.push(facts[i] + '!!!');
    i++;
  }
  return factsNew;
}

function iLoveTheBeatles (i){
  const beatlesLove = new Array
  do{
    beatlesLove.push('I love the Beatles!')
    i++;
  }  while (i < 15)
  return beatlesLove;
}
