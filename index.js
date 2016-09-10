function theBeatlesPlay (arr1, arr2) {
  var arr = [];
  for (var i = 0; i < arr1.length; i++) {
    arr.push(`${arr1[i]} plays ${arr2[i]}`);
  }
  return arr;
}

function johnLennonFacts (facts) {
  var j = 0;
  while(j < facts.length) {
    facts[j] += '!!!';
    j++;
  }
  return facts;
}

function iLoveTheBeatles (n) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    n++;
  } while (n < 15)
  return arr;
}
