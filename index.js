function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < musicians.length; i++){

   array.push(musicians[i] + ' plays ' + instruments[i]);
 }return array
}
function johnLennonFacts(facts){
  var sumFacts = [];
  var i = 0;
  while (i < facts.length){
    sumFacts.push(`${facts[i]}!!!`); i++;
  }
  return sumFacts
}
function iLoveTheBeatles(n){
  var empty =[];
  do {
    empty.push("I love the Beatles!"); n++;
  }
  while (n < 15);
  return empty;
}
