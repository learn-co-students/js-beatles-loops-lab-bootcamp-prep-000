function theBeatlesPlay(arr1, arr2) {
  var myArray=[];
  for (var i = 0; i < arr1.length; i++) {
    myArray.push(arr1[i]+ " plays " + arr2[i]);
  }
  return myArray;
}

function johnLennonFacts(facts) {
  const another= [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"];
  var newFacts=[];
  var i=0;
  while (i < facts.length) {
    newFacts.push(facts[i] +"!!!");
    i++;
  }
  return newFacts;

}

function iLoveTheBeatles(num) {
  var empty=[];
  do {
    empty.push("I love the Beatles!");
    num++
  } while (num < 15);
   return empty;
 }
