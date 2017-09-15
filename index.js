function theBeatlesPlay(musicians, instruments) {
  var assocMusic = [];
  for(var i = 0; i < musicians.length; i++) {
    assocMusic.push(`${musicians[i]} plays ${instruments[i]}`);
}
return assocMusic;
}


function johnLennonFacts(array) {
var count = 0;
  // Use While Loop to Add "!!!" to end of each index.
  while (count < array.length) {
    array[count] = array[count] + '!!!';
    count++;
  }
  return array;
}

// Accepts Number
function iLoveTheBeatles(num) {
  // Creates Variable to Store Empty array
  var emptyArray = [];
  var i = num;
  // Do-While Loop which adds 'I love the Beatles!' to array.
  do {
  // Increments to parameter
    emptyArray.push('I love the Beatles!');
    i--;
  // Loops to make sure less than 15
} while (i >= 0 && num < 15);
  // Returns Array with Strings
return emptyArray;
}
