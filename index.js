function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

console.log("the Beatles Play: ", theBeatlesPlay(['Paul', 'John', 'George', 'Ringo'],
['guitar', 'bass guitar', 'sitar', 'drums']));

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while (arr.length < facts.length) {
    arr.push(`${facts[i]}!!!`);
    i++;
  }
  return arr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

console.log("lennonFacts: ", johnLennonFacts(facts));

/*
Create a function iLoveTheBeatles which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than 15.
The function should return the array with the strings "I love the Beatles!".
*/

function iLoveTheBeatles(number) {
  var arr = [];
  //var count = 0;
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return arr;
}


/*
function maybeTrue() {
  return Math.random() >= 0.5
}


function doWhileLoop(array) {
  do {
    array.pop();
  }  while (maybeTrue() && array.length > 0);
  return array;
}
*/
