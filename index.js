function theBeatlesPlay(arrayMusician, arrayInstruments) {
  var newArray = [];
  for(var i = 0; i < arrayMusician.length; i++) {
    var string = arrayMusician[i] + " plays " + arrayInstruments[i];
    newArray.push(string);
  }
  return newArray;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var i = 0;
  var newArray = [];
  while(array.length > i) {
    var string = array[i] + "!!!";
    newArray.push(string);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return newArray;
}
