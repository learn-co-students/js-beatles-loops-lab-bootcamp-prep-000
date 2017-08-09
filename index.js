function theBeatlesPlay(musicians, instruments){
  var dhammapada = [];
  var interr = " plays "
  for (var i=0;i<musicians.length;i++){
    dhammapada[i] = musicians[i] + interr + instruments[i]
  }
  return dhammapada
}

function johnLennonFacts(array){
  var dhammapada =[]
  var i=0, ex="!!!"
  while (array.length>0){
    dhammapada[i] = array[0] + ex;
    i++;
    array.shift();
  }
  return dhammapada
}

function iLoveTheBeatles(n){
  var dhammapada=[], love="I love the Beatles!"
  do{
    dhammapada.push(love)
    n++
  } while(n<15);
  return dhammapada
}
