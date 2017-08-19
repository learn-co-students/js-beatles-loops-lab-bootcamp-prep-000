var theBeatlesPlay = function(arrayMusicians,arrayInstruments){
  var array = []
  for (var i=0; i<arrayMusicians.length;i++){
    var entry = arrayMusicians[i] + " plays " + arrayInstruments[i];
    array.push(entry)
  }
  return array;
}

var johnLennonFacts = function(facts){
  var i=0;
  while(facts.length>i){
    facts[i]=facts[i]+"!!!";
    ++i;
  }
  return facts
}

var iLoveTheBeatles = function(number){
  var array = [];
  do {
    var string = "I love the Beatles!";
    array.push(string)
    ++number;
  } while(number<15);
  return array;
}
