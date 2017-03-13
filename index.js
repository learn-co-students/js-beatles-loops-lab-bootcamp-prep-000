
function theBeatlesPlay(musicians, instrument) {
  var array = [];
  for (let counter = 0; counter !== musicians.length; counter++) {
    var myString = musicians[counter] + " plays " + instrument[counter];
    array.push(myString);
  }
  return array;
}

function johnLennonFacts(facts) {
  var newArray = [];
  let i = 0;
  while (i !== facts.length) {
    var newFact = facts[i] + "!!!";
    newArray.push(newFact);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return array;
}
