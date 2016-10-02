function theBeatlesPlay (musicians, instruments) {
  var mysentence = [];
  for (let i = 0; i < musicians.length; i++) {
    mysentence.push(musicians[i] + " plays " + instruments[i])
  }
  return mysentence
}

function johnLennonFacts (facts) {
  var j = 0;
  while (j < facts.length) {
    facts[j] = `${facts[j]}!!!`
    j++
  }
  return facts
}

function iLoveTheBeatles(numtimes) {
  var myarray = [];
  do {
    myarray.push("I love the Beatles!")
    numtimes +=1
  } while (numtimes < 15);
  return myarray
}
