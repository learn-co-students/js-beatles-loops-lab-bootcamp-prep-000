function theBeatlesPlay(mus, ins){
  var result = []

  for(var i=0; i<mus.length; i++){
    var temp = `${mus[i]} plays ${ins[i]}`
    result.push(temp)
  }

  return result
}


function johnLennonFacts(facts){
  var result=[]
  var i=0
  while(i<facts.length){
    var temp=`${facts[i]}!!!`
    result.push(temp)
    ++i
  }
  return result
}

function iLoveTheBeatles(n){
  var result = []
  var i=n
  do{
    result.push("I love the Beatles!")
    ++i
  } while(i<15)

  return result
}