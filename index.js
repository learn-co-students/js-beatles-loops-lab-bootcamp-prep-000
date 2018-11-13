function theBeatlesPlay(musicians, instruments) {
  var theBeatles = [];
  for (var i = 0; i < musicians.length; i++) {
    theBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return theBeatles
}

function johnLennonFacts(newJLF){
  var johnLennonFact = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"]
  var newJLF = [];
  var i = 0
  while (i < johnLennonFact.length) {
    newJLF.push(johnLennonFact[i] + "!!!")
    i++;
  }
  return newJLF
}

function iLoveTheBeatles(n){
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++

  } while (n < 15);
  return love;
}
