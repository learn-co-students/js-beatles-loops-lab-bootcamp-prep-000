// add solution here

function theBeatlesPlay(array1, array2){
  var array3 = []
  for(let i = 0; i < array1.length; i++){
    var musician = array1[i];
    var instrument = array2[i];
    var string = `${musician} plays ${instrument}`; 
    array3.push(string)
  }
  return array3
}

function johnLennonFacts(array1){
  var i = 0;
  var string;
  var array2 = [];
  while(i < array1.length)
  {
    string = array1[i];
    string = string + "!!!"
    array2.push(string)
    i++
  }
  return array2
}

function iLoveTheBeatles(number){
  var array1 = [];
  do{
    array1.push("I love the Beatles!");
    number = number + 1
  } while(number < 15)
  return array1
}