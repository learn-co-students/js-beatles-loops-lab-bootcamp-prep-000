// add solution here
function theBeatlesPlay(mus, inst) {
  var arr = [];
  for (var i=0; i < mus.length; i++) {
  arr[i] = mus[i] + " plays " + inst[i]   
  }
return arr
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++;
  }
return facts
}

function iLoveTheBeatles(num){
  var empArr = [];
  do {
      empArr.unshift("I love the Beatles!");
      num++;
      }
  while (num < 15);
return empArr
}