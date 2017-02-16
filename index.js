function theBeatlesPlay(arrayM, arrayI){
  var array=[];
  for (let i=0; i<arrayM.length; i++){
    array.push(arrayM[i] + " plays " + arrayI[i])
  }
  return array;
}

function johnLennonFacts(array){
  var i=0
  while(i<array.length){
    array[i]= (array[i]+"!!!")
    i++
  }
  return array;
}

function iLoveTheBeatles(n){
  var array=[];
  do{
    n++;
    array.push("I love the Beatles!")
  }while (n<15);
  return array;
}
