function theBeatlesPlay(musicians, instrument) {
  var list = [];
  for (var i = 0; i < musicians.length; i++) {
    list.push(musicians[i] + " plays " + instrument[i]);
}
return list;

}
function johnLennonFacts(facts){
  var newFacts=[];
  var i=0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
 return newFacts;
}

function iLoveTheBeatles(number) {
  var something = [];
  do {
  something.push("I love the Beatles!");
  number++;
} while (number < 15);


return something;
}
