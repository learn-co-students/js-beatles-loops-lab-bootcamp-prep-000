function theBeatlesPlay(mus,instr){
  var arrayMus = [];
  for (let i=0; i<mus.length; i++) {
  arrayMus.push (`${mus[i]} plays ${instr[i]}`)
}
  return arrayMus
}


function johnLennonFacts(facts){
  
  var excitedFacts=[]
  
  let i=0
  
  while (i<facts.length){
  excitedFacts.push (`${facts[i]}!!!`)
  i++
  }
  
  return excitedFacts
}

function iLoveTheBeatles(n){
  var beatlesLove=[]
  
  do {
    beatlesLove.push('I love the Beatles!')
    n++
  }
  while (n<15);

  return beatlesLove    
}
