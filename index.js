var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay (musicians, instruments) {
 var array = []
  for (let i= 0; i < musicians.length; i++){
  array.push (musicians [i] + " plays " + instruments [i]);
}
return array
 
}

var array = [  "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function johnLennonFacts (array) {
  var i = 0;
  while ( i < array.length) {
    array.splice ([i], 1, array[i] + "!!!");
    i++;
  }
  return array
}
 var number = 7
 
function iLoveTheBeatles (number) {
  var array = []
  
  do {
    number++;
    array.push ('I love the Beatles!');
  } while (number < 15);
  return array
  
}


