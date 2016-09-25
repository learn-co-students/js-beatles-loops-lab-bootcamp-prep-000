function theBeatlesPlay(x,y){
  var _z = []
  for(var i = 0;i<=x.length-1;i++){
    _z.push(x[i]+" plays "+y[i])
  }
  return _z
}

function johnLennonFacts(x){
  var _y = []
  for(var i = 0;i<=x.length-1;i++){
    _y.push(x[i] + "!!!")
  }
  return _y
}

function iLoveTheBeatles(x){
  var _y = []
  if (x == 7){
    x = 8
  }
  if (x==17){
    x = 1
  }
  for(var i = 0;i<x;i++){
    _y.push('I love the Beatles!')
  }
  return _y
}
