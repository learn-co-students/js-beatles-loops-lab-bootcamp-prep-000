// Learn.co Bootcamp Prep 14 JavaScript Beatles Loops Lab

/*
Define a function that accepts two arrays as arguments.
Create an empty array.
Use a for loop to iterate over musicians. Initiate i at 0, loop while i is
less than the length of the array, increment i by 1 each iteration.
For each iteration - create a string using the first index of musicians and
instruments - musician[i] plays the instrument[i]. Add the string to the
empty array.
Return new array of strings.
*/
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

/* johnLennonFacts
Define a function that accepts an array.
Iterate over each item in the array and append '!!!' to the end of each fact.
Return an array of strings.
*/
function johnLennonFacts(array) {
  var index = 0;
  var facts = [];
  while (index < array.length) {
    facts.push(array[index] + "!!!");
    index += 1;
  }
  return facts;
}

/* iLoveTheBeatles
Define a function that accepts a number as a parameter.
Create empty array.
Use 'do-while loop' that adds "I love the Beatles!" to the empty array while
the number is less than 15.
Increment number.
*/
function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return array;
}
