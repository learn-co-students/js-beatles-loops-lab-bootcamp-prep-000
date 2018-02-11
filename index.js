var theBeatlesPlay = function(array1, array2){
  var empty = []; 
for (var i = 0; i < array1.length; i++){
        var newString = array1[i] + " plays " + array2[i]; 
        empty.push(newString); 
}  
return empty; 
}

var johnLennonFacts = function(array){
  var newEmpty = []; 
  var i = 0
  while (i < array.length){
    newEmpty.push(array[i] + "!!!"); 
    i++; 
  }
  return newEmpty; 
}

var iLoveTheBeatles = function(num){
  var emptyArray = []; 
  do {
    emptyArray.push("I love the Beatles!")
   num++;  
  }
  while (num < 15);
  return emptyArray;
}