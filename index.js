function theBeatlesPlay(musicians,instruments){
  const Array1 = []
  for(let i=0,l= musicians.length;i< l; i++){
      Array1.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return Array1
}

function johnLennonFacts(facts){
  const Array1 = []
  let i = 0
  while(i<facts.length){
    Array1.push(`${facts[i]}!!!`)
    i++
  }
  return Array1
}

function iLoveTheBeatles(n){
  const Array1 =[]
  do{
    Array1.push('I love the Beatles!')
    n++
  }while(n<15)
  return Array1
}