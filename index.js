// add solution here


function theBeatlesPlay(musicians,instruments) {
  var theBeatlesPlay = []
  
  for (let i = 0; i < 4; i++) {
  theBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
return theBeatlesPlay }  

function johnLennonFacts(facts) {
  var exclamationPoint = [];
  var i = 0;
  while (i < facts.length) {
    exclamationPoint.push(`${facts[i]}!!!`); i++; 
  }
  return exclamationPoint;
}

function iLoveTheBeatles(n) {
  var loveBeatles = []
    do { 
    n = n + 1 
    loveBeatles.push("I love the Beatles!") 
      } while (n < 15);
    return loveBeatles
}
