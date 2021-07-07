var empty = [];
function theBeatlesPlay(musicians, instruments) {
  for(var i=0; i<musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  } return empty;
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
var factArr = [];
var count = 0;
while(count<facts.length) {
  factArr.push(facts[count] + "!!!");
  count++;
} return factArr;
}

function iLoveTheBeatles(num) {
  var newArr = [];
  do{
    newArr.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return newArr
}
