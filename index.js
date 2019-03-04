function theBeatlesPlay(musicians,instruments) {
  let newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArray;
}
function johnLennonFacts(facts) {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var i = 0
newArray = [];
while (i < facts.length) {
  newArray.push(facts[i] + '!!!');
  i++;
}
}