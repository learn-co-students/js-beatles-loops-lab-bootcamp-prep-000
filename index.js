// create a string ${musicians} plays ${instruments}
var theBeatlesPlay = (musicians, instruments) =>{
  var array = new Array();
  for(var i = 0; i < musicians.length; i++)
    array.push(musicians[i] + " plays " + instruments[i])

  return array;
}


// add 3 exclamation to every sring in array
var johnLennonFacts = (array) => {
  var i = 0;
  while(i < array.length){
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}


var iLoveTheBeatles  = (n) => {
  var array = new Array();
  do{
    array.push("I love the Beatles!");
    n++;
  }while(n < 15);
  return array;
}
