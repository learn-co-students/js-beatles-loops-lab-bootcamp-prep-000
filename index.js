var theBeatlesPlay = function(musicians, instruments){
  var array = [];
  for(var i=0; i < musicians.length;i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

var johnLennonFacts = function(array){
  for(var i= 0;i< array.length;i++){
    array[i] = array[i] + "!!!";
  }
  return array;
}

var iLoveTheBeatles = function(n){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    n++;
  }while (n < 15);
  return arr;
}
