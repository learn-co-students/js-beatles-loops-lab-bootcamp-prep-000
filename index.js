function theBeatlesPlay(musicians,instruments){
  var concert = [];
  for(var i=0;i<musicians.length; i++){
    concert.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return concert;
}

function johnLennonFacts(array){
  for(var i=0;i<array.length;i++){
    array[i] = array[i] + "!!!";
  }
  return array;
}

function iLoveTheBeatles(num){
  var array = [];
  do{
    array.push("I love the Beatles!");
    num++;
  }while(num<15)
  return array;
}