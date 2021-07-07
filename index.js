// add solution here
function theBeatlesPlay(musicians, instruments) {
  var allMusicians = []

  for (var i = 0; i < musicians.length ; i++){
  allMusicians.push(musicians[i] + " plays " + instruments[i])
  }
  return allMusicians;
}

function johnLennonFacts(facts) {
  var jlfacts = [];
  var i = 0;
  while (facts.length > jlfacts.length) {
    jlfacts.push(facts[i++] + "!!!")
  }
  return jlfacts;

}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    ++number
  } while (number < 15);

return love;
}
