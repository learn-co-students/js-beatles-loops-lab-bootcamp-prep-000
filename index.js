function theBeatlesPlay(musicians, instruments){
  var arr=[];
  for (var i=0; i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return arr;
};

function johnLennonFacts(array){
  for (var i=0; i<array.length;i++){
    array[i]=array[i]+'!!!'
  };
  return array;
};

function iLoveTheBeatles(number){
  var array=[];

  do {
    array.push("I love the Beatles!")
    number++;
  }
  while(
    number<15
  )
  return array;
};
