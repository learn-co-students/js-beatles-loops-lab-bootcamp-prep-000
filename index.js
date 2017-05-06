function theBeatlesPlay(musician, instruments) {
  var array = []
for(var i = 0; i < musician.length; i++) {
  array.push(musician[i] + " plays " + instruments[i]);
}
return array;
}

function johnLennonFacts(array) {
var i = 0;
while(i < array.length){
  array[i] = array[i] + "!!!"
  i++
}
return array;
}

function iLoveTheBeatles(n) {
  var array = [];
  do{
    array.push("I love the Beatles!")
    n++;
  } while(n < 15);
  return array;
}
