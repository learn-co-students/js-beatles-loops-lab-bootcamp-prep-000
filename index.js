function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    if (i === 0) {
      array.push(`${musicians[0]} plays ${instruments[0]}`);
    }
    else if (i === 1) {
      array.push(`${musicians[1]} plays ${instruments[1]}`);
    }
    else if (i === 2) {
      array.push(`${musicians[2]} plays ${instruments[2]}`);
    }
    else if (i === 3) {
      array.push(`${musicians[3]} plays ${instruments[3]}`);
    }
  }
  return array;
}

function johnLennonFacts(array) {
  var i = 0;
  var newFacts = [];
  while (array.length > i) {
    newFacts.push(`${array[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray.push(`${'I love the Beatles!'}`);
    n++;
   }while (n < 15);
  return newArray
}