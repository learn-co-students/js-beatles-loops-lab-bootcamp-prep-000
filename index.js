function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];

  for (let i = 0; i < musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);//destructive but does what it should 
  }
  
  return emptyArray;

}

function johnLennonFacts(facts){

var newFacts = [];
var i = facts.length - 1;

  while(i >= 0)
  {
      newFacts[i] = facts[i]+ "!!!";//is it ok to reference by element?
      (--i);
  }
  return newFacts;
}

function iLoveTheBeatles(i){
  var array = [];
  
  do{ 
  array.push("I love the Beatles!");
  i++;
  }
  while(i < 15)
  
  return array;//create and add to new array
}

// Janky solutions, check solution post-submit