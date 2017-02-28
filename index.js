var theBeatlesPlay = function(musicians, instruments){
  var array = [];
  for(var i=0; i < musicians.length;i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(jlfacts){
  var johnLennonFacts = [];
  var i= 0;
  while (i < jlfacts.length){
    johnLennonFacts.push(`${jlfacts[i]}!!!`)
    i++;

  }
  return johnLennonFacts;
}

var iLoveTheBeatles = function(n){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    n++;
  }while (n < 15);
  return arr;
}
