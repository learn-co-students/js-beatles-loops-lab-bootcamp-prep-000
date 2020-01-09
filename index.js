function theBeatlesPlay(musicians, instruments) { // add solution here
var message = []
for (var i = 0; i< musicians.length; i++) 
{message.push(musicians[i] + " plays " + instruments[i])
}
return message
}


function johnLennonFacts(facts) {
  var endresult = [];
  var i = 0;
  while (i < facts.length) {
    endresult.push(facts[i] + "!!!");i++
  }
  return endresult;
}

function iLoveTheBeatles(num) {
  var message = [];
  
  do {message.push("I love the Beatles!"); num++
  }
  while (num < 15)
  return message
}
