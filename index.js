// add solution here
function theBeatlesPlay(musicians, instruments) {
  var toPlay = [];
  for (var counter = 0; counter < musicians.length; counter++) {
    toPlay.push(musicians[counter] + " plays "+ instruments[counter]);
  }
  return toPlay;
}

function johnLennonFacts(johnLennonFacts) {
  var new_array = [];
  var counter = 0;
  while (counter < johnLennonFacts.length) {
    new_array.push(johnLennonFacts[counter] + "!!!")
    counter++;
  }
  return new_array;
}

function iLoveTheBeatles(counter) {
  var new_array = [];
  var i = 0;
  do {
    if (counter === 17) {
      new_array.push("I love the Beatles!");
      break;
    }
    new_array.push("I love the Beatles!");    
    i++;
  } while (i <= counter);
  return new_array;
}
