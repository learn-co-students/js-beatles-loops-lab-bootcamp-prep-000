function theBeatlesPlay(arrayM, arrayI){
  var newArray = [];
  for(let i = 0 ; i< arrayM.length; i++){
    newArray.push(arrayM[i] +" plays " + arrayI[i]);
  }
  return newArray;
}

function johnLennonFacts(arg){
  var array = [];
  var number = arg.length;
  var i = 0;
  while(number > i){
    array.push(arg[i] + "!!!");
    i++;
  }
  
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return array;
}