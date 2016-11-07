var theBeatlesPlay=(musicians, instruments)=>{
  var array = [];
  for(var i=0;i<musicians.length;i++){
    array[i] = musicians[i]+" plays "+instruments[i];
    //array = array.push(a);
  }
  return array;
}
var johnLennonFacts = (array1)=>{
  var i=0;
  while(i<array1.length){
    array1[i] = array1[i] + "!!!"
    i++;
  }
  return array1;
}

function iLoveTheBeatles(n){
  var array2 = [];
  do{
    //var array2 = new array;
    array2.push("I love the Beatles!");
    n++;
  } while (n<15)
  return array2;
}
