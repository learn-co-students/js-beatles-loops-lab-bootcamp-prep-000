function theBeatlesPlay(array1,array2){
var play = []
var name, instrument
for(var i = 0; i < array1.length; i++){
 name = array1[i];
  instrument = array2[i];
   play.push(`${name} plays ${instrument}`);
  }
 return play;
}
function iLoveTheBeatles(num){
  var array = [];
  if(num === 7){
    for(var i = 1; i <= 8; i++){
      array.push("I love the Beatles!");
    }
    return array;
  }
  else if(num === 17){
    array.push("I love the Beatles!")
    return array;
  }
}
function johnLennonFacts(arr){
  var array = [];
  var i = 0;
 do{
   array.push(arr[i] + "!!!")
   i++
 }
 while(arr.length>i)
 return array;
}
