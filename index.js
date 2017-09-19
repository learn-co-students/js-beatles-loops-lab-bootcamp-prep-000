function theBeatlesPlay(aM, aI) {
  var newA = [];

  // Boundary condition: Make sure arrays are same length
  var lowerIndex;
  if (aM.length > aI.length) {
    lowerIndex = aI.length; // Sets index bound to shorter length
    }
  else {
    lowerIndex = aM.length; // If equal or aM shorter
  }

  // Iterate through
  for (var i = 0; i < lowerIndex; i++) {
    newA.push(`${aM[i]} plays ${aI[i]}`);
  }

  return newA;
}

function johnLennonFacts(a) {
  var upperBound = a.length;
  var i = 0;
  while (i < a.length) {
    a[i] = `${a[i]}!!!`;
    i++;
  }
  return a;
}

function iLoveTheBeatles(n) {
  var a = [];
  var i = 0;
  do {
    a[i] = "I love the Beatles!";
    i++;
    n++;
  } while (n < 15);
  return a;
}
