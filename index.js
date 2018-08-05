function theBeatlesPlay(m, i){
  let e = []
  for(let x = 0; x < m.length; x++){
    e.push(m[x] + " plays " + i[x])
  } return e
}

function johnLennonFacts(f){
  let x = 0
  while(x < f.length){
    f[x] += '!!!'
    x++
  } return f
}

function iLoveTheBeatles(n){
  let e = []
  do{
    e.push('I love the Beatles!')
    n++
  } while(n < 15)
  return e
}