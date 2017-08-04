
function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  } return array;
}


function johnLennonFacts(array){
  var arr = [];
for (var i = 0; i < array.length; i++){
  arr.push(array[i] + '!!!');
} return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}
