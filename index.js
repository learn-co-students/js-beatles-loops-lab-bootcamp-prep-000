function theBeatlesPlay(musicians, instruments){
  var play = [];
  for (var i = 0; i < musicians.length; i++){
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return play;
}

function johnLennonFacts(array){
  var i = 0;
  while (i < array.length){
    array[i] += '!!!';
    i++;
  }
  return array;
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.push('I love the Beatles!');
    num--;
  } while (array.length < num);
  return array;
}
