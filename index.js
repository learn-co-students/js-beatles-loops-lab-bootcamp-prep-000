function theBeatlesPlay(musicians, instruments){
  var r = []
  for(let i=0; i<musicians.length;i++){
    r[i]= musicians[i]+" plays "+instruments[i]
  }
  return r
}

function johnLennonFacts(r){
  let i=0
  while(i<r.length){
    r[i]+="!!!"
    i++
  }
  return r
}

function iLoveTheBeatles(n){
  var r=[]
  let x=0
  do{
    r[x]="I love the Beatles!"
    n++
    x++
    }while(n<15)
    return r
}