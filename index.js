// add solution here

function theBeatlesPlay(arrMusic, arrInst) {
  var newArr = [];
  
  for (var i = 0; i < arrMusic.length; i++) {
    newArr.push(arrMusic[i] + " plays " + arrInst[i]);
  }
  
  return newArr;
}

function johnLennonFacts(facts) {
  var num = 0;
  var excArr = [];
  while (num < facts.length) {
    excArr.push(facts[num] + "!!!");
    num++;
  }
  return excArr;
}

function iLoveTheBeatles(num) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    num++;
  } while(num < 15);
  
  return newArr;
}
