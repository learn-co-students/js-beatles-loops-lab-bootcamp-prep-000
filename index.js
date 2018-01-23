function theBeatlesPlay (musicians, instruments){
  var emptyArray = []
  let i=0
  for (i = 0; i < 4; i++) {emptyArray.push (musicians[i] + " plays " + instruments[i]);
}
  return emptyArray
}


function johnLennonFacts (facts){
let i = 0
var john = []
let l = facts.length

  while (i<l) {john.push (facts[i] + "!!!"); i++;
}
  return john
}

function iLoveTheBeatles(n){
  var empty = []
  do {empty.push ('I love the Beatles!');n+=1
}
while (n < 15);
return empty
empty.splice (0,6)
return empty
}
