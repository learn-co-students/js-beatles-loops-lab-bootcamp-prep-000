function theBeatlesPlay(arrayM, arrayI) {
  var array3 = []
  for (var i = 0; i < arrayM.length; i++) {
    array3.push(`${arrayM[i]} plays ${arrayI[i]}`);
  }
  return array3;
}

function johnLennonFacts(arrayF) {
  var i = 0;
  var oo = [];
  while (i < arrayF.length) {
    oo.push(`${arrayF[i]}!!!`)
    i += 1;
  }
  return oo
}

function iLoveTheBeatles(number) {
  var oo = [];
  do {
    oo.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return oo;
}
