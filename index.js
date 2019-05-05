// add solution here
function theBeatlesPlay (musicians, instruments) {
var beatlesPlay = []
for (var i = 0; i < 4; i++) {
beatlesPlay.push(musicians[i] + " plays " + instruments[i])}
return beatlesPlay}

function johnLennonFacts (facts) {
  var johnLennon = []
  for (var i = 0; i < facts.length; i++) {
    johnLennon.push(facts[i]+"!!!")
  }
  return johnLennon
}

function incrementVariable(number) {
  number = number + 1;
  return number;
}

function iLoveTheBeatles(number) {
  var beatlesLove = []
  do {
    beatlesLove.push("I love the Beatles!")
    number = number + 1
  }
  while (number < 15)
  return beatlesLove
}