function theBeatlesPlay(m,i){
  var a=[]
  for(var n=0;n<m.length;n++){
    a[n]=m[n]+" plays "+i[n]
  }
  return a
}

function johnLennonFacts(a){
  for(var n=0;n<a.length;n++){
    a[n]=a[n]+"!!!"
  }
  return a
}

function iLoveTheBeatles(i){
  var a=[]
  var n=0
  do {
    a[n]='I love the Beatles!'
    n++
  }
    while(n<=i&&i<15)
  return a
}
