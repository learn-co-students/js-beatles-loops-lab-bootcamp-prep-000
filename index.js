// add solution here
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var arrayOfMusicians = ['Mozart', 'Bach', 'Grieg'];
    arrayOfInstruments = ['Piano', 'Trumpet', 'Saxo'];

function theBeatlesPlay(array1, array2) {
  var myArray = [];
  var myString ='';
  var j = 0;
  for (j=0; j<array1.length; j++) {
    myString = array1[j] + " plays " + array2[j]
    myArray.push(myString);
  }
  return myArray;
}


function johnLennonFacts(array) {
  var i=0;
  while (i<array.length) {
    array[i] = array[i] + "!!!";
    i++;
  } 
  return array;
}

function iLoveTheBeatles(n) {
  var myArray2 = [];
  do { 
    myArray2.push("I love the Beatles!");
    n++;
  }
  while (n<15);
  return myArray2;
}

