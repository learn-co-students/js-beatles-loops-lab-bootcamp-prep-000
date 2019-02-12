// add solution here
function theBeatlesPlay (musicians,instruments) {
 var string = [];
 for (let i = 0; i < musicians.length; i++) {
   string.push(musicians[i] + " plays " + instruments[i])
 }
   return string; 
}

function johnLennonFacts(facts) {
  var x = []
  var i = 0
  while (i < facts.length) {
    x.push(facts[i] + "!!!");
    i++;
  }
  return x
}

function iLoveTheBeatles(number){
  var z = [];
  let i = number; 
  do {z.push("I love the Beatles!");
  i++;
    } while(i < 15); 
  return z
}