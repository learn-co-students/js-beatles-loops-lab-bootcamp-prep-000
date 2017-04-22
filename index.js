function theBeatlesPlay(musicians, instruments){
  var bothStrings = [];
  for(let i = 0; i < musicians.length; i++){
    bothStrings.push(musicians[i] + " plays " + instruments[i]);
  }
    return bothStrings;
}

function johnLennonFacts(facts){        
  var newFacts = [];
  var i = 0;
  while(i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
    return newFacts;
}

function iLoveTheBeatles(number){
  var phrase = [];

  do{
    phrase.push("I love the Beatles!");
    number++;
  }while(number < 15)
    return phrase;
  }