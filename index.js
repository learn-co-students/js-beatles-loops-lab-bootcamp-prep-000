// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push( musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
 
 

const fact = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts (fact) {
  var i = 0;
  var newArray = [];
  while (fact.length > i) {
    newArray.push( `${fact[i]}` + "!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num){
  var array=[];
  do{
      num++;
      array.push("I love the Beatles!");
      }
      while (num < 15);
  return array;
}