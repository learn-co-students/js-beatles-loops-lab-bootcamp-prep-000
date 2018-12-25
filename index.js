function theBeatlesPlay(musici, instru){
  var segSucks = []
  for (var n = musici.length; n != 0; n--){
    var holdStr = `${musici.shift()} plays ${instru.shift()}`
    segSucks.push(holdStr)
  }
  return segSucks
}

function johnLennonFacts(facts){
  var newFact = []
  for(var i = facts.length; i != 0; i--){
    newFact.unshift(`${facts[i-1]}!!!`)
  }
  return newFact
}

function iLoveTheBeatles(n){
  var ilb=[]
  do{
    ilb.push('I love the Beatles!')
    n++
  }while(n<15)
  return ilb
}