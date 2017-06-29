function  theBeatlesPlay(musicians,instruments){
  var newArray=[];
  var newString=""

  for(var i=0; i<musicians.length; i++){
     newString=musicians[i]+" plays "+instruments[i];
    newArray.push(newString);
  }
  return newArray;
}

function  johnLennonFacts(array){
var i=0;
  var newArray=[];
  var newString=""
  while (i<array.length) {
    newString=array[i]+"!!!";
     newArray.push(newString)
     i++
  }
  return newArray
}

function  iLoveTheBeatles(number){
  var newArray=[];
  do{
    newArray.push("I love the Beatles!")

    number++
  }  while (number<15)
  return newArray
}
