function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = []; 
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])
  }
  return whoPlaysWhat
}
function johnLennonFacts(facts) {
  var johnLennonFactsAgain = []; 
  var i = 0
  while (i < facts.length) {
    johnLennonFactsAgain.push(facts[i] + "!!!");
    i++
    }
    return johnLennonFactsAgain
  }
function iLoveTheBeatles(n) {
  var loveThem = [];
  var i = n
  do { 
    loveThem.push("I love the Beatles!"); i++
  }
  while (i < 15)
  return loveThem
}