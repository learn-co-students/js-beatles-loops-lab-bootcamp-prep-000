// add solution here
function theBeatlesPlay(musicians,instruments) {
  var array = [ ]
 for (let i = 0; i < musicians.length; i += 1 ){
    var string = musicians[i] + " plays " + instruments[i]
    array.push(string)
 }
  return array
 
}

function johnLennonFacts(facts) {
  let i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i += 1;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [ ]
  do {
    array.push("I love the Beatles!")
    n += 1;
  } while (n < 15)
  return array;
}