function theBeatlesPlay(musicians, instruments) {
   var allPlayers = [];
   for (let i=0; i < musicians.length; i++) {
        allPlayers.push(musicians[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

function johnLennonFacts(facts){
  let i=0;
  let newFacts=[];
  while(i<facts.length) {
   newFacts.push(facts[i]+'!!!');
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var empty= [];
  do{
    empty.push("I love the Beatles!");
    n++;
  }while(n<15);
  return empty;
}