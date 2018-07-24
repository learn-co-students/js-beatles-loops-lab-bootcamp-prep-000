function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var array = [];
  for(var i=0; i<4; i++){
    array.push(arrayMusicians[i] + " plays " + arrayInstruments[i])
  }
  return array; 
}

function johnLennonFacts(facts){
  var i = 0;
  while(i<facts.length){
    facts[i]= facts[i] + "!!!"
    i++
  }
return facts
}

function iLoveTheBeatles(number){
  var array =[]
  do {
    array.push("I love the Beatles!")
    number++
  }  while (number<15);
  return array 
}