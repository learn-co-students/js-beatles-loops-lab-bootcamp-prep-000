function theBeatlesPlay(musicians, instruments){
  var product = []
  for (var i=0; i<musicians.length; i++){
    product.push(musicians[i] + " plays " + instruments[i])
  }
  return product
}

function johnLennonFacts(facts){
  var i=0
  while(i<facts.length){
    facts[i] = facts[i]+"!!!"
    i=i+1
  }
  return facts
}

function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
    ++number
  } while (number<15);
  return array
}
