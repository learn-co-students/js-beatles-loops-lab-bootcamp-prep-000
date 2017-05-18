function theBeatlesPlay(artist, instruments) {
  var combined = [];
  for (var i = 0; i < artist.length; i++) {
    combined.push(`${artist[i]} plays ${instruments[i]}`)
  }
  return combined;
}

function johnLennonFacts(facts) {
  var i = 0;
  var funfacts = [];
  while (i < facts.length) {
    funfacts.push(`${facts[i]}!!!`);
    i++
  }
  return funfacts;
}

function iLoveTheBeatles(number) {
  var loveArray = [];
  var newNumb = number;
  do {
    loveArray.push("I love the Beatles!")
    newNumb++
  } while (newNumb < 15)
  return loveArray;
}
