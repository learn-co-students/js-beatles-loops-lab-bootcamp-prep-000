function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}
function johnLennonFacts(facts){
  var newFacts = [];
  while (facts.length > 0) {
    newFacts.unshift(facts.pop() + "!!!")
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push('I love the Beatles!');
    number++;
  }while(number < 15)
  return array
}
