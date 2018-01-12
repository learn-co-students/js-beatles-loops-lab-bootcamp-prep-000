function theBeatlesPlay(artists, instruments){
  var emptyArray = []
  for(var i = 0; i < artists.length; i++){
    emptyArray.push(artists[i] + " plays " + instruments[i])
  }
  return emptyArray
}

function johnLennonFacts(facts){
  var n = 0
  var lennonFactsArray = []
  while(n < facts.length){
    lennonFactsArray.push(facts[n] + "!!!")
    n++
  }
  return lennonFactsArray
}

function iLoveTheBeatles(num){
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    num++
  } 
  while (num < 15);
  return emptyArray
}