var array1 = ["John Lennon", "Michael Buble", "Peter Sampson"]
var array2 = ["guitar", "voice", "nothing"]

function theBeatlesPlay(array1, array2) {
  var array3 = [];
  for (let i = `0`; i < `4`; i++) {
    array3.push(`${array1[i]} plays ${array2[i]}`);
    }
    return array3;
}


var array4 = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(array4) {
  var i = `0`;
  var array5 = [];
  while (i < array4.length) {
    array5.push(array4[i] + "!!!"); i++;
  }
  return array5
}

function iLoveTheBeatles(i) {
  var array6 = [];
  do {
    array6.push("I love the Beatles!"); i++;
  } while (i < `15`);
  return array6;
}