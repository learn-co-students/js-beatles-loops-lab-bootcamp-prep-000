function theBeatlesPlay(musicians, instruments) {
  var x = [] 
  for (var i =0; i < musicians.length; i++){
    x.push(musicians[i] + ' plays ' + instruments[i])
  }
  return x
}

function johnLennonFacts(facts) {
  var n = [];
  var u = 0
  while (u < facts.length) {
    n.push(facts[u] + '!!!')
    u++
  } 
  return n
}

function iLoveTheBeatles(num) {
   var phrases = [];
   do {
     phrases.push("I love the Beatles!");
     num++
   } while (num < 15);
   return phrases;
}