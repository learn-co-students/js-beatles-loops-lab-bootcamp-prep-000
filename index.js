function theBeatlesPlay(a, b){
  var c = []
  for (let i=0; i<a.length; i++){
    c.push(`${a[i]} plays ${b[i]}`)
  }
  return c
}

function johnLennonFacts(a){
  for (let i=0; i<a.length; i++){
    a[i]= a[i] + "!!!"
  }
  return a
}

function iLoveTheBeatles(n){
  var a = []
  var i=0
  do {
    a[i]= "I love the Beatles!"
    i++
  } while(n<15 && i<=n)
  return a
}
