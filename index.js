// add solution here

function theBeatlesPlay(m, ins) {
  var z = [];
  for (var i = 0; i < m.length; i++) {
    z.push(`${m[i]} plays ${ins[i]}`)
  }
  return z
}

function johnLennonFacts(f) {
  var z = [];
  var counter = 0
  while (counter < f.length) {
    z.push(f[counter] + '!!!');
    counter++;
  }
  return z;
}

function iLoveTheBeatles(n) {
  var z = [];
  do {
    z.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return z
}