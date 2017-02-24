function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i = 0; i < 4; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


function johnLennonFacts(input){
  var array2 = [];
  var i = 0;
  var length = input.length;
   while (i < length){
    array2.push(input[i++] + "!!!");
   }
  return array2;
}

function iLoveTheBeatles(n){
  var array1 =[];
    do {
    array1.push("I love the Beatles!")
      n++;
    } while (n < 15);
return array1;
}
