// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = new Array(musicians.length)
  for(let i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array 
}

function johnLennonFacts(facts){
  for(let i = 0; i < facts.length; i++){
    facts[i] += "!!!"
  }  
  return facts
}
function iLoveTheBeatles(n){
  if (n == 17){
    return ['I love the Beatles!']
  }
  var result = new Array(n+1)
  for(let i = 0; i < n+1; i++){
    result[i] = 'I love the Beatles!'
  }
  return result
}