function theBeatlesPlay (musicians, instruments) {
  var x = []
  var i
  for (i = 0; i < 4; i++) {
    x.push(`${musicians[i]} plays ${instruments[i]}`)
  }
      return x
}

function johnLennonFacts (facts) {
  var i = facts.length
  var x = 0
  console.log(i)
  var z = []
  while (i > 0){
    z.push(`${facts[x]}!!!`);
    x++
    i--;
  }
  return z
}

function iLoveTheBeatles(num) {
  var x = []
  do {
    x.push("I love the Beatles!");
    num++;
  }
  while (num < 15)
  return x
}