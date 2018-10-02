// add solution here
function theBeatlesPlay(musicians,instruments) {
  var new_array = [];
  var i = 0;
  for (var x in musicians){
    new_array.push(musicians[x] + " plays " + instruments[i])
    i = i + 1;
  }
  return new_array
}

function johnLennonFacts (array){
  var x = 0 ;
  while (x < array.length){
    array[x]= (array[x] + "!!!");
    x = x + 1;
  }
  return array;
  
}

function iLoveTheBeatles(number){
  var new_array = [];
  do{
    new_array.push("I love the Beatles!");
    number ++
  }while(number < 15);
  return new_array
}