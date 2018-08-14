// add solution here
function theBeatlesPlay(musicians, instruments) {
  var list = []
  for (var i = 0; i < 4; i++) {
    var result = `${musicians[i]} plays ${instruments[i]}`; 
    list.push(result)
  }
  return list
}


function johnLennonFacts(facts) {
  var list = []
  var i = 0
   while(i < facts.length) {
     var results = facts[i] + "!!!";
     list.push(results);
     i += 1
   }
   return list
}   

function iLoveTheBeatles(number) {
  var list = []
  var i = parseInt(number)
  do {
  list.push("I love the Beatles!");
  i += 1
  } while (i < 15);
  return list
}