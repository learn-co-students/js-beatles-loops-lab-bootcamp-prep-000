function theBeatlesPlay(musicians, instruments) {
  //body of function containing an empty array
  var array = [];
  //for loop which loops over array of musicians
  for (var i=0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  //contain an empty array to return results in function
  var results = [];
  //use variable count to keep running though the while loop
  var count = 0;
while (count < facts.length) {
  results.push(facts[count]+ "!!!");
  count++;
}
return results;
}

function iLoveTheBeatles(number) {
  var array = [];
  do { array.push("I love the Beatles!");
  number++;
  }
  while (number < 15);
  return array;
}
