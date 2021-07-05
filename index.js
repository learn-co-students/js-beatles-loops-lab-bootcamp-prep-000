function theBeatlesPlay (musicians, instruments) {
var newlist= [];
for (let i=0; i<musicians.length; i++) {
newlist[i]=`${musicians[i]} plays ${instruments[i]}`;
}
return newlist;
}
function johnLennonFacts(facts) {
  for (let i=0; i<facts.length; i++) {
    facts[i]=facts[i] + "!!!";
  }
  return facts;
}
function iLoveTheBeatles (n) {
var emptyarray = [];
  do {
    emptyarray.push("I love the Beatles!");
    n++;
  }
  while (n<15);
  return emptyarray;
}