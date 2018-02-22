function theBeatlesPlay(artists, instruments) {
  var strings = [];
  for (var i = 0; i < artists.length; i++) {
    strings.push(`${artists[i]} plays ${instruments[i]}`);
  }
  return strings;
}

function johnLennonFacts(array) {
  var completed = [];
  var count = 0
  while (count < array.length) {
    completed.push(array[count] + '!!!');
    count++;
  }
  return completed;
}

function iLoveTheBeatles(n) {
  var empty = [];
  do {
    empty.push('I love the Beatles!');
    n++;
  } while (n< 15)
  return empty;
  
}