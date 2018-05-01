function theBeatlesPlay(arr1, arr2) {
  var array = [];
  for (var i = 0; i < arr1.length; i++) {
    array.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return array;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(arr) {
  var i = 0;
  var array = [];
  while (i < arr.length) {
    array.push(arr[i].concat("!!!"));
    i++;
  }
  return array;
}
function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return array;
}