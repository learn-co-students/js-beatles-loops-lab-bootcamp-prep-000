function theBeatlesPlay(a, b){
  var emptyArr = []
  for(var i = 0; i < a.length; i++){
    emptyArr.push(`${a[i]} plays ${b[i]}`)
  }
  return emptyArr
}

function johnLennonFacts(a){
  var num = 0
  while (num < a.length){
    a[num] = a[num++] + "!!!"
  }
  return a
}

function iLoveTheBeatles(a){
  var emptyArr = []
  do{
    emptyArr.push("I love the Beatles!")
  } while(++a < 15)
  
  return emptyArr
}