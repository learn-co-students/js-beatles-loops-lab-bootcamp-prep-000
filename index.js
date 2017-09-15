function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}
function johnLennonFacts(array){
  var i = 0;
  while(array[i]){
    array[i] = array[i] + '!!!';
    i++;
  }
  return array;
}
function iLoveTheBeatles(n){
var array = [];
do{
  array.push('I love the Beatles!');
  n++;
}while(n<15)
return array;
}
