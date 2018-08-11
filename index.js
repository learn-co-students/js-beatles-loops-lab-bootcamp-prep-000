function theBeatlesPlay(musicians, instruments){
  var array=[]
  for(let i = 0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  const newfacts=[]
  let x = 0, n = facts.length;
  while (x< n){
    newfacts.push(`${facts[x]}!!!`); x++;
  }
  return newfacts
}

function iLoveTheBeatles(x){
  var array=[]

  do {array.push("I love the Beatles!"); x++;}
  while (x<15);
  return array
}
