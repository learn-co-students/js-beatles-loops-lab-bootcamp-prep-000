// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
 var  newArr = [];
  for(var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
    } 
     return newArr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var result = [];
  var i = 0;
  while ( i < array.length) {
    result.push(array[i] + "!!!")
    i++;
  }
     return result;
}

 function iLoveTheBeatles(number) {
    var arr = [];
   
    do {
     arr.push(`I love the Beatles!`)
      number++
    }
    while(number < 15)
    
    return arr
    
  }
 iLoveTheBeatles(16);

 


