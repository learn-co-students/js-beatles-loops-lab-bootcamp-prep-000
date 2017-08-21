function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    newArray.push(array[i] + '!!!');
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  if(number < 15) {
    for(var i = 0; i <= number; i++) {
      newArray.push("I love the Beatles!")
    }
  } else {newArray.push("I love the Beatles!")}
  return newArray;
}
