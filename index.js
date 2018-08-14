// add solution here
function theBeatlesPlay(musicians, instruments) {
  var list = []
  for (var i = 0; i < 4; i++) {
    var result = `${musicians[i]} plays ${instruments[i]}`; 
    list.push(result)
  }
  return list
}

function timer() {
  return Math.random() >= 0.5
}

function johnLennonFacts(facts) {
  var list = []
  var i = 0
   while(i < facts.length)  {
     var results = facts[i] + "!!!";
     list.push(results);
     i += 1
   }
   return list
}
