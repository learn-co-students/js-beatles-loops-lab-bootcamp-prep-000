// combines and iterates through musicians and instruments
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array) {
  var factsArray =[];
  var i = 0
  while (i < array.length) {
    factsArray.push(`${array[i]}!!!`);
    ++i;
  }
  return factsArray;
}
function iLoveTheBeatles(number) {
  //create a variable that stores an empty array
  var love = [];
  
  var i = 0;
  
  do {
    love.push(`I love the Beatles!`);
    i++;
  }
  while (i < 15 - number);
  
  return love;
}