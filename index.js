// add solution here

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i < 4; i++){
    var string = musicians[i] + " plays " + instruments[i];
    arr.push(string);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i = 0;
  var newFacts = [];
  while(i < facts.length){
    var string = facts[i] + "!!!";
    newFacts.push(string);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var arr = [];
  var i = 0;
  do{
    arr.push("I love the Beatles!");
    i++;
  }while(i <= n && n < 15);
  return arr; 
}