function theBeatlesPlay(musicians, instruments){
  var arr=[]
  let i=0;
  for ( i=0 ; musicians.length>i; i++){
    var str = musicians[i]+" plays "+instruments[i];
    arr.push(str);

  }
return arr;
}

function johnLennonFacts(johnArr){
  var arr=[]
  var len= johnArr.length
  var i=0
  while (i<len) {
    arr.push((johnArr[i]+"!!!"))
    i++
  }
    return arr
}
function iLoveTheBeatles(num){
  var arr = []
  var i =0
  do {
    arr.push('I love the Beatles!')
    i++
  } while (num<=15 && i<=num);

return arr
}
