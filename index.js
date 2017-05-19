var theBeatlesPlay = function(musicians, instruments) {
  var whatTheyPlay = [];
  for (let i = 0; i <= musicians.length - 1; i++) {
    whatTheyPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return whatTheyPlay;
}

var johnLennonFacts = function(array) {
  var emFacts = [];
  let i = 0
  while (i <= array.length - 1) {
    emFacts.push(`${array[i]}!!!`);
    i++;
  }
  return emFacts;
}

var iLoveTheBeatles = function(number) {
  var loveLove = [];
  do {
    loveLove.push("I love the Beatles!");
    number++
  } while (number < 15)
  return loveLove
}
