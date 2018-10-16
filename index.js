// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [];
  
  for (let i = 0, length = musicians.length; i < length; i++ ){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var s_facts = []
  
  let i = 0
  while (i < facts.length){
    s_facts.push(`${facts[i]}!!!`)
    i++
  }
  return s_facts
}

function iLoveTheBeatles(n){
  var number = []
  
  do{
    number.push(`I love the Beatles!`)
    n++
  } while (n < 15)
  return number
}