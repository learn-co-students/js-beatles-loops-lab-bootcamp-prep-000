function theBeatlesPlay(musicians, instruments){
  var empty=[]
  for(var i = 0;i<musicians.length; i++){
    empty[i]=musicians[i]+ " plays "+
instruments[i]  }
return empty
}

function johnLennonFacts(facts){
  var i = 0
  var empty=[]
  while(i<facts.length){
    empty[i]=facts[i]+"!!!"
    i++
  }
    return empty
}

function iLoveTheBeatles(number){
  var empty=[]
  do{
    empty.push("I love the Beatles!")
    number++
  }while(number<15)
  return empty
}
