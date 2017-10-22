function theBeatlesPlay(musicians, instruments){
  const arr=[]

  for (let i=0 ; musicians.length>i; i++){
    //arr.push(${musicians[i]} plays ${instruments[i]});
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return arr;
}

function johnLennonFacts(johnArr){
  const arr=[]
  let i=0
  while (i<johnArr.length) {
    arr.push(`${johnArr[i]}!!!`)
    i++
  }
    return arr
}
function iLoveTheBeatles(num){
  var arr = []
  do {
    arr.push('I love the Beatles!')
    num++
  } while (num<15);
return arr
}
