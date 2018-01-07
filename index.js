function theBeatlesPlay(musicians, instruments) {
  var result = [];
  
  for (let i=0; i<musicians.length; i++) {
    let word = `${musicians[i]} plays ${instruments[i]}`;
    result.push(word);
  }
  return result;
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += "!!!";
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}