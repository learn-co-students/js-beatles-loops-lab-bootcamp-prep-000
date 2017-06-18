var theBeatlesPlay = function(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}
var johnLennonFacts = function(array){
  var i = 0;
  while (i < array.length){
      array[i] +="!!!";
      i++;
  }
  return array
}
var iLoveTheBeatles = function(number){
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    number++;
  }
    while(number < 15)
  return newArray;
}
