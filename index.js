// add solution here

function theBeatlesPlay (musicians, instruments){
  var empty =[];
  var length = musicians.length;
  for (var i = 0; i < length; i++){
    empty[i] = `${musicians[i]}` + " plays "+ `${instruments[i]}`;
  } return empty;
}

function johnLennonFacts (facts){
  var length = facts.length;
  var empty = [];
  let i = 0;
  while (i< length){
    empty[i]=`${facts[i]}` +"!!!";
    i++;
  } return empty;
}

function iLoveTheBeatles (n){
  var empty = [];
  
  do { empty.push("I love the Beatles!");
    n++;
  } while (n < 15){
  } return empty;
}