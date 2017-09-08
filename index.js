function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for (var i = 0; i < musicians.length; i++){
     myArray.push(musicians[i] + " plays " + instruments[i]);

  }
  return myArray;
}

function johnLennonFacts(facts){
  var myArray = [];
  var i = 0;
  while(i<facts.length){
  myArray.push(facts[i] + "!!!");
  i++;
  }
  return myArray;
}


function iLoveTheBeatles(number){
  var myArray =[];
  var i = 0;
do {
myArray.push("I love the Beatles!");
++i;
} while(i <= number && number < 15);
return myArray;
}
