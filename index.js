function theBeatlesPlay(musicians, instruments){
  var strings = [];
  for (let i=0; i<musicians.length; i++){
    strings.push(musicians[i]+' plays '+instruments[i]);
  }
  return strings;
}
function johnLennonFacts(arrayOfFacts){
  var i = 0;
  var temp = [];
  while (i<arrayOfFacts.length){
    temp.push(arrayOfFacts[i]+'!!!');
    i++;
  }
  return temp;
}//not destructive!
function iLoveTheBeatles(i){
  var array = [];
  do{
    array.push("I love the Beatles!");
    i++
  }while(i<15);
  return array;
}
