function theBeatlesPlay(musicians, instrument){
  var i;
  for(i = 0; i < musicians.length; i++){
    musicians[i] += " plays " + instrument[i];
  }
  return musicians
}
function johnLennonFacts(facts){
  let i = 0;
  while(i < facts.length){
    facts[i] += "!!!";
    i++;
  }
  return facts
}
function iLoveTheBeatles(n){
  var array = [];
  let i = 0;
  do{
    array[i] = "I love the Beatles!"
    i++
    n++
  } while (n < 15)
  return array;
}
