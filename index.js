function theBeatlesPlay (musicans, instruments) {
  var array = []
  for (let i = 0; i < 4; i++) {
  if (i === 0) {
    array.push (`${musicans[i]} plays ${instruments[i]}`);
  } else {
    array.push (`${musicans[i]} plays ${instruments[i]}`);
  }
  }
    return array;
}

function johnLennonFacts (facts) {
  var newarray = []
  var factslength = facts.length
  var n = 0
  while (n < factslength) {
  newarray.push (`${facts[n]}!!!`);
  n++
}
return newarray;
}

function iLoveTheBeatles (n) {
  var emptyarray = []
  do {
emptyarray.push(`I love the Beatles!`)
n++
} while (n < 15);
return emptyarray
}
