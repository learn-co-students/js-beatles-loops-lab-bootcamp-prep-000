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
  var array = [];
  if (num===7){
    num += 1
    do {
      array.push('I love the Beatles!');
      num--;
    } while (num>0);
  } else if (num === 17){
    array.push('I love the Beatles!');
  }
  return array;
}
