function theBeatlesPlay(musicians, instruments) {
  var newArray = []; 
  for(var i =0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var result = [];
  var i = 0
  while (i<array.length) {
    result .push(array[i] + "!!!")
    i++;
  }
  return result;
}

function iLoveTheBeatles (number){
  let newArray = [];
  do {
    newArray.push(`I love the Beatles!`);
    number++;
  } while (number < 15);
  return newArray;
}