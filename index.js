//create a function called theBeatlesPlay with two parameters musicians and instruments
function theBeatlesPlay(musicians, instruments) {
  //create an empty array
    var emptyArray = [];
  //create a for loop that loops over the array musicians
    for(var i = 0; i < musicians.length; i++) {
      //Add string to empty array
      emptyArray.push(musicians[i] + " plays " + instruments[i]);
    }
    return emptyArray;
}

//create a function johnLennonFacts with one arguement facts
function johnLennonFacts(facts) {
  var emptyArray = []; // empty array for holding new string arrays
  var i = 0;//counter variable
//while loop to iterate through facts array
  while(i < facts.length){
    emptyArray.push(facts[i] + "!!!");//add facts array with "!!!"" to emptyArray
    i++;//add 1 to counter
  }
  return emptyArray;//return empty array with new strings
}

//create a function iLoveTheBeatles which takes a number as a parameter
function iLoveTheBeatles(n){
  var emptyArray = [];//create empty array
  //dowhile loop that adds "I love the Beatles!" to empty array
  do{
    emptyArray.push("I love the Beatles!");
    n++;
  } while(n < 15);

  return emptyArray;
}
