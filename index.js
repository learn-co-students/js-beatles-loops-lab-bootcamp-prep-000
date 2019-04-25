function theBeatlesPlay(musicians, instruments) {
 var array = []
 for (var i = 0; i < musicians.length; i++) {
   array[i] = (`${musicians[i]} plays ${instruments[i]}`)
 }
 return array
}

function johnLennonFacts(facts) {
  let x = facts.length;
  while (x > 0) { 
    x--
    facts[x] += "!!!"
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++
  }
  while (num < 15);
  return array
}