function theBeatlesPlay(musicians, instruments){
  var myarray = [];
  for (let i=0; i<musicians.length; i++){
    myarray.push(musicians[i]+' plays '+instruments[i]);
  }
  return myarray;
}
function johnLennonFacts(array){
  var myarray = [];
  var i = array.length-1;
  while (i >= 0) {
    myarray[i]=array[i]+'!!!';
    i--;
  }
  return myarray;
}
function iLoveTheBeatles(n){
  var myarray =[];
  do {
    myarray.push("I love the Beatles!");
    n++;
  } while ( n < 15 );
  return myarray;
}
