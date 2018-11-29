function theBeatlesPlay(musicians, instruments){
  var playlist = [];
  for (let i = 0, l = musicians.length; i < l; i++ ) {
    playlist[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return playlist
}

function johnLennonFacts(array){
  var i=0;
  var facts=[];
  while (i < array.length){
    facts.push(array[i] + "!!!");
    i++;
  }
  return facts
}

function iLoveTheBeatles(num){
  var array=[];
  do{
     array.push("I love the Beatles!");
    num++;

  }while(num<15);
  return array;
}
