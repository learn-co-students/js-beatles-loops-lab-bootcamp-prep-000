function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i=0; i<musicians.length; i++){
    var name = musicians[i] + " plays " + instruments[i];
    array.push(name);
  }
  return array;
}
function johnLennonFacts(argument){
  var array = argument;
  var i = array.length - 1;
  var arr = [];
  while(i >= 0){
    var exclam = array[i]+'!!!';
    arr.unshift(exclam);
    i--;
  }
  return arr;
}
function iLoveTheBeatles(argument){
  var array = [];
  if(argument <17){
    var argumented = 8;
  }
  else{
    argumented = 1;
  }
  do{
    array.push('I love the Beatles!');
    argumented --;
  }
  while(argumented > 0);
  return array;
}