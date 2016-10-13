var theBeatlesPlay = function(array1, array2){
  var array3 = new Array();
  for(let i = 0; i < array1.length; i ++){
    array3.push(`${array1[i]} plays ${array2[i]}`)
  }
  return array3;
}

var johnLennonFacts = function(array){
  var array1 = new Array();
  var count = 0;
  while(count < array.length){
    array1.push(`${array[count]}!!!`);
    count++;
  }
  return array1;
}

var iLoveTheBeatles = function(number){
  var array = new Array();
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15)
  return array;
}
