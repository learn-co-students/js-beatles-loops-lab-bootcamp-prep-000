
function theBeatlesPlay (musicians, instruments) {
var array1 = []

for (var i = 0; i < musicians.length; i++) {
    array1.push (musicians[i] + " plays " + instruments[i])
}
return array1
}

function johnLennonFacts (facts) {

  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!"
    i++;
}
  return facts
}

function iLoveTheBeatles (number) {
  var array = []
 do {
   array.push('I love the Beatles!')
   number ++
 }
  while (number < 15)
  return array
}
