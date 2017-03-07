function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i]); 
  }
  return newArray;
}

function johnLennonFacts(array) {
  var num = array.length;
  var i = 0;
  var newArray = [];
  while(num > 0){
    newArray.push(array[i] + "!!!");
    num -= 1;
    i += 1;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return newArray;
}