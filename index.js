// add solution here

function theBeatlesPlay (mus, inst) {
  var newArr = [];
  
  for(var i = 0; i < mus.length; i++) {
    var musInst = `${mus[i]} plays ${inst[i]}`;
    newArr.push(musInst);
  }
  return newArr
}

function johnLennonFacts (facts) {
  for (var i=0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!"
  }
  
  return facts
}

function iLoveTheBeatles (n) {
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!");
    n++;
  } while (n<15);
  return beatlesLove
}