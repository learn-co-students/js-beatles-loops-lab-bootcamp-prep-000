// add solution here
function theBeatlesPlay(musicians,instruments){
  var array=[]
  for(let i=0;i<musicians.length;i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  let i=0,array=[]
  while(i<facts.length){
    array.push(`${facts[i]}!!!`)
    i+=1
  }
  return array
}

function iLoveTheBeatles(number){
  var arrays=[]
  do {arrays.push(`I love the Beatles!`)
  number+=1
}while (number<15)
  return arrays
}
