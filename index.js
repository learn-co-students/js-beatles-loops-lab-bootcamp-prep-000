// add solution here
function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  var b = musicians.length
  for (var i = 0; i<b; i++){
    var a = musicians[i] + " plays " + instruments[i]
    myArray.push(a)
  }
      return myArray
}

function johnLennonFacts(facts){
  var i = 0;
  while(i<facts.length){
    facts[i] = facts[i]+"!!!";
    i++;
  }
  return facts;
}


function iLoveTheBeatles(number){
  var myArray = [];
    do{
    myArray.push("I love the Beatles!");
    number++;
    }while(number<15);
     return myArray 
}