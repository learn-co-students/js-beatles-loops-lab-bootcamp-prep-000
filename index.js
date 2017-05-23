function theBeatlesPlay (musicians, instruments){
var newArray = []
for(var i = 0; i<musicians.length; i++) {
newArray.push (musicians [i] + " plays " + instruments [i])
 }
return newArray
}
function johnLennonFacts(facts) {
  var newArray = [];
  var j = 0;
  for (;j < facts.length; j++) {
  newArray.push(facts[j] + "!!!");
}
  return newArray;
}
function iLoveTheBeatles(number){ // number == 7
var newArray= [];
do {

newArray.push('I love the Beatles!')
number++
} while (number<15)
 return newArray
}
