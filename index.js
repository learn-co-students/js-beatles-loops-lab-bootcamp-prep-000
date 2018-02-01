function theBeatlesPlay (musicians,instruments){
  var newArray = [];
  for (var i=0; i<musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }return newArray
}

function johnLennonFacts(array){
  var newArray = [];
  while(array.length > 0){
    newArray.push(`${array[0]}!!!`);
    array.shift();
  } return newArray
}

function iLoveTheBeatles(number){
  var newArray = [];
  do{
    newArray.push(`I love the Beatles!`);
    number++;
  } while(number<15);
  return newArray
}