// add solution here
function theBeatlesPlay(musicians, instruments){
  var newarray = [];
for (let i = 0; i < 4; i++) {
  newarray.push(musicians[i] + " plays " + instruments[i])
}
return newarray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
  facts[i] += "!!!"
  i++
}
  return facts
}

function iLoveTheBeatles(number){
  var newarray = [];
    do {
    newarray.push("I love the Beatles!")
    number++
    } while (number < 15)
  return newarray
}
