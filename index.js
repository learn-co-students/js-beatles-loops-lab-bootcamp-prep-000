musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  
function theBeatlesPlay(musicians, instruments){
  //create an empty array stored in a variable
  var beatlesArray = [];
  
  //for loop loops over the array of musicians
  for (var i = 0; i < musicians.length; i++) {
    //create string using first index of musicians array and first index instruments array
    beatlesArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesArray;
}

// Create a function johnLennonFacts. This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):
 
 const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

// Use a while loop to loop over the facts array and add "!!!" to the end of every fact. The function should return an array of strings with exclamation points.

function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return array;
}
  