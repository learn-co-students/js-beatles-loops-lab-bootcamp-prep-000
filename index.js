function theBeatlesPlay(array1,array2){
  var array=[];
  for(let i=0; i<array1.length;i++){
   array[i] = array1[i]+ ' plays ' + array2[i];
  }
  return array;
}

function johnLennonFacts(array){
  var i=0;
  while(i < array.length){
    array[i]= array[i]+"!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number){
  var array=[];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return array;
  
}