function theBeatlesPlay (musicians, instruments){
  var sayings = [];
  for (var i = 0; i < musicians.length; i++) {
    sayings.push(musicians[i] + " plays " + instruments[i]);
  }
  return sayings;
}


function johnLennonFacts(arr) {
 var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
var newFacts = [];
var i = 0;
 while (i < arr.length) {
 newFacts.push(arr[i] +"!!!");
 i++;
  }
 return newFacts;
}

function iLoveTheBeatles(count){
  var newArray = [];
  do {
      newArray.push("I love the Beatles!");
      count++
  }
  while (count < 15){
    return newArray;
  }
}
