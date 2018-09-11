// add solution here
function theBeatlesPlay (arrayOfMuscians, arrayOfInstrument) {
  var emp = {}
  for (var i = 0; i < arrayOfMuscians.length; i++) {
    var musicianAndInstrument = arrayOfMuscians[i] + " plays " + arrayOfInstrument[i];
    emp = [...emp, musicianAndInstrument]
  }
  return emp;
}

function johnLennonFacts (array) {
  var m = 0;
  function incrementally () {
    m = m + 1;
  }
  while (m < array.length) {
  
    array.splice(m, 1, array[m] + "!!!")
    incrementally();
  }
  return array;
}

function iLoveTheBeatles (num) {
  var emp = {};
  
  function incrementally () {
    num = num + 1;
  }
  do {
    emp = [...emp, "I love the Beatles!"];
    incrementally(); }
    while (num < 15)
  return emp;
}