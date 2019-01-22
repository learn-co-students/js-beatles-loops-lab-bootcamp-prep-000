// add solution here

function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for (var i = 0; i < 4; i++) {
 beatles.push(musicians[i]+" plays "+instruments[i])
}
return beatles
}


function johnLennonFacts(facts) {
var factz = [];
var i = 0
while (i < facts.length) {
  factz.push(facts[i] + "!!!")
  i++;
}
 return factz
}


function iLoveTheBeatles (number) {
  var love = [];
  do {love.push("I love the Beatles!")}
  while(number < 15)
   return love
}

