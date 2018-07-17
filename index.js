function theBeatlesPlay(musicians, instruments) {
  var array = []; // creates empty array stored in a variable
  for (let n = 0; n < musicians.length; n++) { // sets counter to loop over the array of musicians
    array.push(`${musicians[n]} plays ${instruments[n]}`); // adds values to empty array as it cycles each musician
  } return array; // returns the array of new strings
}