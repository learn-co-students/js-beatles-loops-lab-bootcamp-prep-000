function BeatlesLoops () {
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  return musicians
  return instruments
}

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < instruments.length; i++) {
    var musicianName = musicians[i]
    var instrumentName = instruments[i]
    newArray.push(musicianName + " plays " + instrumentName);
  }
  return newArray
}

function johnLennonFacts(array) {
  var factsArray = [];
  for (var i = 0; i < array.length; i++) {
    factsArray.push(array[i] + "!!!")
  }
  return factsArray
}

function iLoveTheBeatles(number) {
  var fanArray = [];
  do {
    fanArray.push("I love the Beatles!")
    if (number < 15) {
    for (var i = 0; i < 7; i++) {
      fanArray.push("I love the Beatles!")
    }
  }
    number = number + 1
    return fanArray
  } while (number < 15);
}
