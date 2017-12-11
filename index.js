function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + " plays " + instruments[i])
}
return array
}

function johnLennonFacts(facts) {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  var newFacts = [];
  let i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + '!!!')
    i++
  }
  return newFacts
}
function iLoveTheBeatles(n) {
  var number = [];
  do  {
    number.push("I love the Beatles!");
    n++
  } while (n < 15);
  return number
}
