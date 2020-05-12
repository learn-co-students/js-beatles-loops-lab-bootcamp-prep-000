// add solution here
var musicians = ["John Lennon", "Hardwell"]
var instruments = ["guitar", "DJ"]
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

var a = theBeatlesPlay(musicians,instruments)
console.log(a)


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  var array = []
  let i = 0
  while (i < facts.length) {
    array.push(facts[i] + '!!!');
    i++;
  }
  return array
}
var b = johnLennonFacts(facts)
console.log(b)


let num = [8]
function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array
}
var c = iLoveTheBeatles(num)
console.log(c)
