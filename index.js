var theBeatlesPlay = function (musicians, instruments){
  var beatles = [];
  for (let i = 0; i < 4; i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}
function johnLennonFacts (array){
  var i = 0;
  var newArray = [];
  while (i<array.length){
    newArray.push(`${array[i]}!!!`);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles (number){
  var array = [];
  do {
    array.push(`I love the Beatles!`);
    number++;
  }
  while (number < 15);
  return array;
  }
