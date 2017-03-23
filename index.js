function theBeatlesPlay(musicians, inst) {
  var newArray = new Array()
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${inst[i]}`);
  }
  return newArray
}

function johnLennonFacts(johnFacts) {
  var newFacts = new Array()
  var i = 0
  while (i < johnFacts.length) {
    newFacts.push(`${johnFacts[i]}!!!`)
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(count) {
  var beatlesLove = new Array();
  do {
    beatlesLove.push("I love the Beatles!")
    count++;
  } while (count < 15)
  return beatlesLove;
}
