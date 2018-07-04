// add solution here
function theBeatlesPlay(armusicians,arinstruments){
  var array = [];
 
  for(var i = 0;i < armusicians.length;i++){
        array[i] = armusicians[i] +' plays ' +arinstruments[i];
  }
  return array;
}
function johnLennonFacts(arfacts){
  var arraycounter = 0;
  var newarray = [];
  
  while (arraycounter < arfacts.length){
  newarray[arraycounter] = arfacts[arraycounter] + '!!!';
  arraycounter++;
  }
  return newarray;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push('I love the Beatles!');
    number--;
  }while(number >= 0 && number < 15);
  return array;
}