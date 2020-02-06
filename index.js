// add solution here
function theBeatlesPlay(mus, inst) {

var myArray = [];

for (var i = 0; i < mus.length; i++) {
  myArray.push(`${mus[i]} plays ${inst[i]}`);
} return myArray;
}

function johnLennonFacts(array) {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"];
  return facts;
} while (johnLennonFacts() > 0) {
  console.log("johnLennonFacts()" + "!!!");
}


function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}