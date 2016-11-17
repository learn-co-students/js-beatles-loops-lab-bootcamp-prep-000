function theBeatlesPlay(musicians, instruments) {
//Create empty array in the function
  var array = [];
//Create for loop with condition of being less than the total length, increment by 1 (remember to define "i")
  for (var i = 0; i < musicians.length; i++){
//Create the string to pass values into both arrays
      var string = `${musicians[i]} plays ${instruments[i]}`;
//Use push() method to put the values into the string
      array.push(string);
  }
//Remember to return the string
  return array;
}

//While loop with facts argument

function johnLennonFacts(facts) {
  var array = []; //Create empty array
  var i = 0; //Give variable the beggining value
  while (i < facts.length) { //Will stop after the last array value
    array.push(`${facts[i]}!!!`); //Passing the values into the string
    i++; //Incrementing by one
  }
  return array;
}


function iLoveTheBeatles(number) {
  var array = []; //Create empty array
  do {
    array.push("I love the Beatles!"); //Push value into array
    number++; //Increment by 1
  } while (number < 15); //Stop after 15 times
  return array;
}
