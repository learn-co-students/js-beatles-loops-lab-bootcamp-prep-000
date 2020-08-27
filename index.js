// add solution here
function theBeatlesPlay(array, array1) {
    var array2 = [];
    for (let i = 0; i < array.legnth; i++) {
      console.log(`${array[i]} plays ${array1[i]}`)
      array2.push();
    }
    return array2
  }









  // add solution here
let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function theBeatlesPlay(array, array1) {
  var array2 = [];
  for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]} plays ${array1[i]}`)
    array2.push(`${array[i]} plays ${array1[i]}`);
  }
  return array2
}

function johnLennonFacts(array) {
  var array3 = [];
  var i = 0;
  while (i < array.length) {
    console.log(`"${array[i]}!!!"`);
    array3.push(`${array[i]}!!!`)
    i = i + 1;
  }
  return array3;
}

function iLoveTheBeatles(number) {
  var array4 = [];
  do {
    console.log("I love the Beatles!")
    number = number + 1
    array4.push("I love the Beatles!")
  } while (number < 15);
  return array4
}
