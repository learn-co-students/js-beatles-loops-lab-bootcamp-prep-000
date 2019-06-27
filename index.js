// add solution here

function theBeatlesPlay(musicians, instruments) {
var array = [];

 for (let i = 0; i < musicians.length; i++) {
array.push(musicians[i] + " plays " +  instruments[i] );
}
return array
}
// This for loop takes the two arrays I created that list the names of the Beatles and one containing the instruments they played.
// Each array element from both arrays combines to be returned like "John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", etc.


function johnLennonFacts(array) {
var facts = array;
var end = "!!!";
  var i = 0;
while (i < array.length) {
facts[i] += end;
i++;
}
  return facts
}

// This while loop starts with a function that accepts an array as a perimeter. Next, I declare three variables: One to set the contents
//  of the array into a new array on which to return at the end; another that will allow me to add in the "!!!" to the end of each array element;
// and then a variable defining the counter.
// In the while loop portion, we declare that, while the count is less than the length of the array, starting with index [0], the loop will add "!!!" to the end of
// each array element no matter what index value of the element. In the final portion of the loop, we specify that the loop increments by one value at a time.
// We return the variable containing the new array.


function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  var n = number;
do {
array.push("I love the Beatles!");
n++;
}  while (n < 15);

return array
}
