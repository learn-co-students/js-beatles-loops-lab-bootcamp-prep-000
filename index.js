// add solution here

function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];

  for(var i = 0; i < musicians.length ; i++){
    // create a string using the first index of
    // musicians array and first index of instruments array
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}


function johnLennonFacts(facts){
// use a while loop
var i = 0
  while(i < facts.length){
    facts[i] = `${facts[i]}!!!`
    i++
  }
  return facts
}



function iLoveTheBeatles(number){
  var emptyArray = [];
  // create a do-while loop
  do{
    emptyArray.push("I love the Beatles!");
    number++;
  }while(number < 15);


  return emptyArray
}