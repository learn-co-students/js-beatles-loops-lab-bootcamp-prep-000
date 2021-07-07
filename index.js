// add solution here
var musicians = [];
var instruments = [];
var newArray = [];


function theBeatlesPlay(musicians, instruments){
  var m = musicians.length;
  for (var i = 0; i < m; i++)
  
  {
  
  newArray.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return newArray;
}


function johnLennonFacts(facts) {
  var newArray1 = [];
  var i = 0;
  while (i < facts.length){
     newArray1.push(`${facts[i]}!!!`);
    i++;
  }
  return newArray1;
}


function iLoveTheBeatles(num){
  var newArray2 = [];
  
  do {
    newArray2.push( "I love the Beatles!")
    num++;
}

while (num < 15);
return newArray2;
}






