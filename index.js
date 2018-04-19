function theBeatlesPlay (musicians, instruments) {
  var array = [];
  
  for (var i = 0; i < musicians.length; i++) {
   var message = `${musicians[i]} plays ${instruments[i]}`;
   array.push(message);
  }
  
  return array;
}

function johnLennonFacts (factArray){
  var array = [];
  let index = 0;
  while (index < factArray.length){
    var message = `${factArray[index]}!!!`;
    array.push(message);
    index++
  }
  return array; 
}


function iLoveTheBeatles (number){
  var array = []; 
  do{
    var message = "I love the Beatles!";//.repeat(number+1)
    array.push(message);
    number++
  } while (number < 15);
  return array;
}












/*
function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return array;
}*/