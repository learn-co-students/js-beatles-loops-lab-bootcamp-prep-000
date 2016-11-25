function theBeatlesPlay(musicians, instruments){
  var phrase=[]
  for(var i=0; i < 4; i++){
      phrase.push(musicians[i] + " plays " + instruments[i])
    }
return phrase
}


function johnLennonFacts(facts){
  var i=0
  while(i < facts.length){
      facts[i] += "!!!"
      i++
    }
return facts
}


function iLoveTheBeatles(n){
  var loveBeatles=[]
  do{
    loveBeatles.push("I love the Beatles!")
    n++
  }while(n < 15)
  return loveBeatles
}
