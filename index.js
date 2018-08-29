// add solution here
function theBeatlesPlay(musArr, instArr) {
  var arr = [];
  for (var i = 0; i < musArr.length; i++) {
    arr.push(musArr[i] + " plays " + instArr[i]);
  }
  return arr;
}

function johnLennonFacts(factsArr) {
  var i = 0;
  while (i < factsArr.length) {
    factsArr[i] += "!!!";
    i++;
  }
  return factsArr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++
  } while (num < 15);
  return arr;
}