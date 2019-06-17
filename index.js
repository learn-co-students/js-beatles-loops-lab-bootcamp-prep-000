// add solution here
function theBeatlesPlay (musicians, instruments) {
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    var middleword = " plays "
    var statement = musicians[i] + middleword + instruments[i]
    empty.push(statement);
    }
  return empty
}

function johnLennonFacts (facts) {
  var j = 0;
  while (j < facts.length) {
    facts[j] = facts[j] + "!!!"
    j++;
  } 
  return facts
}


function iLoveTheBeatles (number) {
  var beatles = [];
    do {
    var proclaim = "I love the Beatles!"
    beatles.push(proclaim)
    number++
  } while (number < 15)
  return beatles;
}