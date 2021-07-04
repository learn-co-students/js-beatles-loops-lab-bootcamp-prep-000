function theBeatlesPlay(musicians, instruments){
  var theBeatlesPlay = new Array();
  for (let i = 0; i < 4; i++){
    theBeatlesPlay.push(musicians[i]+ " plays " + instruments[i]);
  }
  return theBeatlesPlay;
}

function johnLennonFacts(facts){
  let i = 0;
  var facts2 = new Array();
  while(i < facts.length){
    facts2.push(facts[i] += "!!!");
    i++
  }
  return facts;
}

function iLoveTheBeatles(elementNumber){
  var fanboy = new Array();
  do{
    fanboy.push("I love the Beatles!");
    elementNumber++;
    } while (elementNumber < 15);
  return fanboy;
}

