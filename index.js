// add solution here

function theBeatlesPlay(beatles,instruments){
  var lineup = []
  if (beatles.length != instruments.length) { //We dont want to find an index out of range
    return 'error';
  }
  
  for(var i = 0; i < beatles.length; i++){
   var pairing = `${beatles[i]} plays ${instruments[i]}`;
   lineup.push(pairing);
  }
  return lineup;
}

function johnLennonFacts(facts){
  for(var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}

function iLoveTheBeatles(n){
  var allTheLove = ['I love the Beatles!']
  for (var i = 0; i < n && n < 15; i++){
    allTheLove.push(allTheLove[0])
  }
  return allTheLove;
}