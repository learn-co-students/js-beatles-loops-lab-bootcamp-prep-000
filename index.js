function theBeatlesPlay(musicians , instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(array){
  for(var i = 0; i < array.length ; i++){
    array[i] = array[i] + '!!!'
  }
  return array;
}

function iLoveTheBeatles(Number){
  var array=[];
  do{
    array.push('I love the Beatles!');
    Number++;
  }while(Number < 15);
  return array;
}