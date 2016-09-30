function theBeatlesPlay(musicians, instruments) {
  var play = [];
  for (let i = 0; i < musicians.length; i++) {
    play.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return play;
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += '!!!'
  }
  return array;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return love;
}
