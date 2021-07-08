function theBeatlesPlay(arrMusicians, arrInstruments) {
  var emptyArray = [];
  for (var i = 0; i < arrMusicians.length; i++){
    emptyArray[i] = arrMusicians[i] + " plays " + arrInstruments[i]
    } return emptyArray; 
}

function johnLennonFacts(array){
  var i = 0; 
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++; 
  } return array 
}

function iLoveTheBeatles(number){
  var emptyArray = []; 
  var i = 0;
  do {
    emptyArray[i] = "I love the Beatles!";
    number++;
    i++; 
  } while (number < 15);
    return emptyArray; 
}