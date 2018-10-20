function theBeatlesPlay(musicians, instruments){
  var array = [] // Create a variable with an empty array.
  //for loop that iterates over musicians
  for (var i = 0; i < musicians.length; i++){ // Use a for loop, which iterates over the array. of musicians. Be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is).
    array[i] = musicians[i] + " plays " + instruments[i] // The first time through the loop, it should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar".
  }
  return array
}


function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i]+'!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return array;
}
