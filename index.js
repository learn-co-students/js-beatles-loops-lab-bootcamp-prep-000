// add solution here
function theBeatlesPlay(musi,instru){
  var empt = [];
  var i;
  for(i = 0; i < musi.length; i++){
    empt.push(musi[i] + ' plays ' + instru[i]);
  }
  return (empt);
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  var sentence = [];
  do {
    sentence.push("I love the Beatles!");
    num++
  } while (num < 15);
  return sentence;
}