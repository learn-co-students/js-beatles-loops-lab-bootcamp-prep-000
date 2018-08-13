function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = []
  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesArray
}
 const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
 function johnLennonFacts(facts) {
  var lennonFacts = []
  var i = 0
  while(facts[i]) {
    lennonFacts.push(facts[i] + "!!!");
    i++
  }
  return lennonFacts
}
 function iLoveTheBeatles(number) {
  var beatlesArray = []
  do {
    beatlesArray.push("I love the Beatles!");
    number++
    } while (number < 15);
  return beatlesArray
}