var musicians = []
var instruments= []
function theBeatlesPlay(musicians, instruments) {
  var newarray=[]
  for(var i=0; i<4; i++) {
    console.log(newarray.push(musicians[i]+ " plays " + instruments[i]))
  } return newarray
}

function johnLennonFacts(facts) {
  var i=0
  while(i < facts.length) {
 facts[i]=facts[i]+"!!!";
  i++
}  return facts
}

function iLoveTheBeatles(a) {
  var b=[]
  do {b.push("I love the Beatles!")
  a++
  } while (a<15)
  return b
}
