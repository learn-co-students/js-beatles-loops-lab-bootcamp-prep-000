// add solution here
function theBeatlesPlay(musicians,instruments){
  var myVariable = []
  for (var i = 0; i< musicians.length; i++ ) {  
   
    myVariable.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myVariable
}

function johnLennonFacts(facts){
  var factList = []
  for( var i = 0; i < facts.length; i++){
    factList.push(`${facts[i]}!!!`)
  }
  return factList
}

function iLoveTheBeatles(num){
  var beatlesLove = [];
  do { 
    beatlesLove.push("I love the Beatles!");
    num++
  } while (num < 15);
  return beatlesLove
}