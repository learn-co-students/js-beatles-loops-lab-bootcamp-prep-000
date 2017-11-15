//CODE
function theBeatlesPlay(arrMusicians, arrInstruments){
  var array = [];
  for(var count=0; count<arrMusicians.length;count++){
    array.push(arrMusicians[count]+" plays "+arrInstruments[count])
  }
  return array;
}
function johnLennonFacts(arrFact){
  var size = 0;
  while(size < arrFact.length){
    var fact = arrFact[size];
    arrFact[size] = fact + "!!!";
    size++;
  }
  return arrFact;
}
function iLoveTheBeatles(num){
  var array = [];
  do{
    array.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return array;
}
