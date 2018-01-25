var buttStuff = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < 4; i++) {
    buttStuff.push(`${musicians[i]} plays ${instruments[i]}`); 
  }
  return buttStuff; 
}


function johnLennonFacts(array) {
  var desiredArray = [];
  var i = 0;
  while (i < array.length) {
    desiredArray.push(`${array[i]}!!!`);
    i++;
  }
  return desiredArray;
}

function iLoveTheBeatles(n) {
  var altJ = [];
  do {
    altJ.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
    return altJ;
}