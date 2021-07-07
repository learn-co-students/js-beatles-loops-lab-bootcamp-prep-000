// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array= []; //create a variable with an empty array
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]) //iterate over the musicians array, push each index of musicians and instruments into the empty array.
  }
  return array;
}

function johnLennonFacts(facts) {
  var result = []; //create a variable with an empty array
  var count = 0; //create a counter
  while (count < facts.length) {
    result.push(facts[count] + '!!!'); //push '!!!' into the end of each value of facts array.
    count++;
  }
  return result;
}

function iLoveTheBeatles(num) {
  var arr = []; //create a variable with an empty array
  do {
    arr.push("I love the Beatles!") 
    num++;
  } while (num < 15); //do push text into arr while num less than 15
  return arr;
}