function theBeatlesPlay(musicians, instruments){
  var array = [];
  // newObj = 
  for ( let i = 0; i < musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  
  let facts2 = []                     //making place for function
  let i = 0
  while (i < facts.length) {          //looping over the facts
  facts2.push(`${facts[i++]}!!!`)     //add !!!
}
  return facts2
}

function iLoveTheBeatles(number){
  var array = [];
   do{
   number++;
   array.push("I love the Beatles!");
  }
  while (number < 15);
  
  return array;
}