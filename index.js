// Beatles Loops returns an array of strings containing what instruments each musician plays

function theBeatlesPlay(musicians, instruments){
  var BeatlesPlay = []
  for(var i=0;i<(musicians.length);i++){
    BeatlesPlay.push(musicians[i]+" plays "+instruments[i]);
  }
  return BeatlesPlay
}

//Beatles Loops johnLennonFacts returns an array of strings with exclamation points; using a while loop
function johnLennonFacts(facts){
  var newFacts = []
  var i=0
  while(i<(facts.length)){
    newFacts.push(facts[i]+"!!!")
    i++
  }
  return newFacts
}

//Create a function iLoveTheBeatles which accepsts a number as a parameter
function iLoveTheBeatles(number){
  var BeatlesLove =[]
  do {
    BeatlesLove.push("I love the Beatles!")
    number++
  } while (number < 15)
  return BeatlesLove
}