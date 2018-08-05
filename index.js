// add solution here
function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(var counter = 0; counter < musicians.length; counter++){
    result.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
  return result;
}

function johnLennonFacts(facts){
  var counter = 0;
  while(counter < facts.length){
    facts[counter] += "!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  } while(number < 15)
  return array;
}