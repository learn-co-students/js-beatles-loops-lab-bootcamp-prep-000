// add solution here

function theBeatlesPlay(musicians, instruments){
  var band = []
  for(let i = 0; i < musicians.length; i++){
    band.push(musicians[i] +' plays '+ instruments[i])
  }
  return band
}

//var i = 0

function johnLennonFacts(facts){
  var facts2 = []
  var i = 0
  while(i < facts.length){
    facts2.push(facts[i] + '!!!')
    i++
  }
  return facts2
}

function iLoveTheBeatles(num){
  var myArray = []
  do{
    myArray.push('I love the Beatles!')
    num++
    }
  while(num < 15)
    
  return myArray
}
