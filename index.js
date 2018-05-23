function theBeatlesPlay(musicians, instruments){
  var empty = []
  for (var i = 0; i < musicians.length; i++){
   empty.push(musicians[i] + " plays " + instruments[i]);
  }
  return empty;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  var i = 0
  var replaceFacts
  while ( i < facts.length){
    replaceFacts.push(fact[i] + "!!!")
    i++;
  }
  return replaceFacts
}