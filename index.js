function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
   }
   return beatles;
}
function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
  facts[i] = facts[i] + "!!!";
  i++;
    }
  return facts;
}
function iLoveTheBeatles(n) {
    var anArray = [];
    do {anArray.push("I love the Beatles!");
		n++;}
    while (n < 15);
return anArray;
}