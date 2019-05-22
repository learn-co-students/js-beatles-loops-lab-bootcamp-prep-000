// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var result = [];
  for(var i = 0; i < arrMusicians.length; i++) {
    result.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  } return result;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  } return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return array;
}