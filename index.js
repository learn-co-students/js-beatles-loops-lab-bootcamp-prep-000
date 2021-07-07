
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay (array1, array2) {
  var emptyArray = [];
  for (var counter = 0; counter < 4; counter++){
  emptyArray.push(`${array1[counter]} plays ${array2[counter]}`);
  }
  if (emptyArray.length = 4) { 
return emptyArray;
  }
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and a boy scout", "He hated the sound of his own voice"];
function johnLennonFacts (arrayOfFacts) { 
// need to return all strings in array with "!!!" at end
// Need to use while loop. If the array has all !!! at end of strings, then adding !!! should stop
 var x = 0;
while (x < arrayOfFacts.length) {
arrayOfFacts[x] = arrayOfFacts[x] + "!!!";
x = x + 1;  }
return arrayOfFacts;
}

function iLoveTheBeatles (Number) {
  var emptinessArray = [];
  do {emptinessArray.unshift("I love the Beatles!");
  Number++;
  } while (Number < 15);
  return emptinessArray;
}