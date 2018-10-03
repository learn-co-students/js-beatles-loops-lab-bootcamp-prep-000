// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = []
 for(var i = 0; i < musicians.length; i++) {
   newArr.push(musicians[i] + " plays " + instruments[i])
 }
 return newArr
}

function johnLennonFacts(facts) {
  var moreFacts = []
  var i = 0
  while (i < facts.length) {
    moreFacts.push(facts[i] + "!!!");
    i++;
  }
  return moreFacts;
}

function iLoveTheBeatles(num) {
  var imagine = []
  do{
    imagine.push("I love the Beatles!");
    num++;
  }
  while (num < 15)
  return imagine;
}