function theBeatlesPlay(musicians, instruments){
  var array = [ ];
  for (var i = 0; i < musicians.length; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    } return array;
}

function johnLennonFacts(array) {
  var newArray = [ ];
  var i = 0;
  while (array.length > i){
    newArray.push(`${array[i]}!!!`);
    i++;
  } return newArray;
}

function iLoveTheBeatles(n){
  var array = [ ];
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
    return array;
}
