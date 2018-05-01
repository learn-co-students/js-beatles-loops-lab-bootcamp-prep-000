function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for (let i = 0, l = musicians.length; i < l ; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return array
}


function johnLennonFacts(facts){
  const shoutedFact = []
  
  let i = 0
  while (i < facts.length) {
  shoutedFact.push(`${facts[i]}!!!`)
  i++
  }
  
  return shoutedFact
  
}

function iLoveTheBeatles(number){
  const x = []
  
  do {
  x.push("I love the Beatles!");
  number++
  } while ( number < 15);
  
  return x
}