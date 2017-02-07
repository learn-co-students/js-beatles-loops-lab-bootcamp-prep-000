function theBeatlesPlay(musicians, instruments){

  var arr = new Array();

  for (var i = 0; i < musicians.length; i++) {
  arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(array){

let count = 0;
var arr = [];
while(count <= array.length-1){
 // console.log(array[count] + " !!!");
  arr.push(array[count] + "!!!");
  count ++;
}
  return arr;
}


function iLoveTheBeatles(number){
  var arr = [];
  var count = 0;
  do {
    if(number <= 15){
    arr.push("I love the Beatles!");
    count ++;
  }else{
    return "I love the Beatles!";
  }
    
  } while (count <= number);
  return arr;
}

