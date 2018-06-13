var i
function theBeatlesPlay (musicians, instruments) {
  var x = []
  for (i=0;i<4;i++) {
    var a = musicians[i]
    var b = instruments[i]
   x[i] = `${a} plays ${b}` 
  }
  return x
}
function johnLennonFacts(facts) {
  var j = 0
  var z = []
  var y = facts.length
  while (j < y) {
    z[j] = `${facts[j]}!!!`
    j++
  }
  return z
}
function iLoveTheBeatles(x) { if (x < 15) {
  var z = []
  var j = 0
  do {z[j] = "I love the Beatles!"
  j++
    } while (j <= x)
    return z
} else {return "I love the Beatles!"}
}