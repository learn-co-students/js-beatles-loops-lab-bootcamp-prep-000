// add solution here
function theBeatlesPlay(musicians,instruments){
  var beatles = [];
  //compare to the length
  for (var i=0; i <musicians.length; i++){
   beatles.push(musicians[i] + ' plays '  + instruments[i]);
  }
 return beatles;
}

function johnLennonFacts(facts){
  var i=0;
 var newArray=[];
  while (i < facts.length){
     /* This is how you can also write the code to mean the same thing newArray.push(facts[i] + "!!!");*/
    newArray.push(`${facts[i]}!!!`);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num){
  var betArray=[];
  do{
     betArray="I love the Beatles!";
  }
  while(num<15);
return betArray;
}