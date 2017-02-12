function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];

  for (let i = 0; i < musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);//destructive but does what it should
  }

  return emptyArray;

}

function johnLennonFacts(facts){

var newFacts = [];
var i = 0;

  while(i < facts.length)
  {
      newFacts.push( `${facts[i]}!!!` );//pre-solution: is it ok to reference by element?
      (i++);
  }
  return newFacts;
}
/**
Previous
line 15: var i = facts.length -1;
line 17:  while(i >= 0)
line 19: newFacts[i]= facts[i] + "!!!";
Post-solution: Can use push ala newFacts.push(facts[i]+"!!!"), no idea why it wasn't working.
P-S 2: needed to use interpolation, but ordering incorrect, will use count-up
**/

function iLoveTheBeatles(n){
  var array = [];

  do{
  array.push("I love the Beatles!");
  n++;
  }
  while(n < 15)

  return array;//create and add to new array
}

// Janky solutions, check solution post-submit
