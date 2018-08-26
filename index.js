// add solution here

// for loop

function theBeatlesPlay(musicians, instruments) {
  // musicians, instruments are both arrays
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}



// while loop

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0
  while ( i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
return newFacts;
}

  
  // do while loop
function iLoveTheBeatles(n){
  var newNum = [];
  do {
  newNum.push("I love the Beatles!");
  n++;
   } while (n < 15);
return newNum;
}