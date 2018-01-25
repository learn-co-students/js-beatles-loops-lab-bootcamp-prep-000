function theBeatlesPlay(musicians, instruments){
  var empty= [];
  for(var x = 0; x < musicians.length; x++)
  {
  empty.push( musicians[x]+" plays "+ instruments[x]);
  }
  return empty;
}

function johnLennonFacts(facts){
  var newFacts = [];
  for(var x =0; x < facts.length; x++)
  {
    newFacts.push(facts[x]+"!!!");
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var empty = [];
  do{
    empty.push("I love the Beatles!");
    number++;
  }while(number<15);
  return empty;
}