function theBeatlesPlay(musician, instruments){
  var n = 0
  var i = 0
  var array = [];
  var len = musician.length;
  for ( i=0; i<len; i++){
    var a = musician[n] + " plays " + instruments[n]
    array.push(a)
    n++
  }
  return array
}
function johnLennonFacts(facts){
  var len=facts.length
  var i = 0
  var n = 0
  for (i=0; i<len; i++) {
    facts[n] = facts[n] + '!!!'
    n++
  }
  return facts
}
function iLoveTheBeatles(number){
  var array = [];
  var n = number
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
  return array
}
