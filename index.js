// add solution here
function theBeatlesPlay(musicians, instruments) {
var mus= []
  for (var i = 0; i < musicians.length; i++) {
    var array= musicians[i]+" "+ "plays"+" "+instruments[i]
    mus.push(array)
  }
return mus
}

function johnLennonFacts(facts) {
var mus=[]
var i=0
while (i<facts.length) {
  var array= facts[i] +"!!!"
  mus.push(array)
 var i= ++i
}
return mus
}

function iLoveTheBeatles(num) {
  var empty= []
  do {
    num=++num
    empty.push("I love the Beatles!")

  } while (num<15);
return empty
}
