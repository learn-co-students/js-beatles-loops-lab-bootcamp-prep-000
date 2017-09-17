function theBeatlesPlay(beatles, instr) {
  var n = [];
  var i = 0;
  for (;i < beatles.length; i++) {
    n.push (`${beatles[i]} plays ${instr[i]}`);
  }
return n;
}

function johnLennonFacts(jfacts) {
  var i = jfacts.length - 1
  while (i >= 0) {
     jfacts[i] += "!!!";
     i--;
   }
return jfacts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return array;
}
