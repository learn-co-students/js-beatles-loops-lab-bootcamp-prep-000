function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for(let i = 0; i < musicians.length; i++){
    theBeatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatles;
}
function johnLennonFacts(facts) {
  let i = 0;
  while(i < facts.length){
    facts[i] += "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(n) {
  var beatleLove = [];
  do{
    beatleLove.push("I love the Beatles!");
    n--;
  } while(n < 15 && n >= 0);
  return beatleLove;
}