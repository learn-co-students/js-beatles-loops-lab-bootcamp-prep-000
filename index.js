// add solution here
function theBeatlesPlay(musicians, instruments){
  var musiciansInstruments = new Array(musicians.length);
  for (let i = 0; i < musicians.length; i++){
    musiciansInstruments[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return musiciansInstruments
}
function johnLennonFacts(facts){
  var i = 0
  while(i < facts.length){
    facts[i] = facts[i]+"!!!"
    i++
  }
  return facts
}
function iLoveTheBeatles(n){
  var iLOveB = []
  do{ 
    iLOveB.push("I love the Beatles!")
    n++
  } while (n < 15);
  return iLOveB
}