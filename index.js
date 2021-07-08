// add solution here
function theBeatlesPlay(musician, instrument) {
  var array = [];
  for (var i = 0; i < musician.length; i++) {
    array[i] = musician[i] + " plays " + instrument[i];
  }
  return array;
}

function johnLennonFacts(facts) {
  var j = facts.length;
  while (j >= 0) {
    j--;
    facts[j] = facts[j] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array2 = [];
  do {
    array2.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return array2;
}