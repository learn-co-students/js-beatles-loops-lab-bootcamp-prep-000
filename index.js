function theBeatlesPlay (arrayMusicians, arrayInstruments){
  var newArray = new Array();
  for (var i = 0; i < arrayMusicians.length; i++){
    var stringVar = `${arrayMusicians[i]} plays ${arrayInstruments[i]}`
    newArray[i] = stringVar;
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!`
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var newArray = new Array();
  do{
    newArray.push("I love the Beatles!")
    number++;
  }
  while(number < 15)
  return newArray;
}
