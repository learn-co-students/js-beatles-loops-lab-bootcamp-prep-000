function theBeatlesPlay(musicians, instruments) {
  var array = []; // creates empty array stored in a variable
  for (let n = 0; n < musicians.length; n++) { // sets counter to loop over the array of musicians
    array.push(`${musicians[n]} plays ${instruments[n]}`); // adds values to empty array as it cycles each musician
  } return array; // returns the array of new strings
}

function johnLennonFacts(facts) {
  var n = 0;
  while (n < facts.length) {
    facts[n] += "!!!";
    n++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = []; // creates empty array stored in a variable
  do {
    array.push("I love the Beatles!"); // adds value to empty array as it cycles up to 15
  } while (n++ && n < 15);
  return array;
}