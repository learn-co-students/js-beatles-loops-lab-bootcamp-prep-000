function theBeatlesPlay(musicians, instruments) {
  let arr = new Array()
  for (let i=0; i<musicians.length; i++) {
    let str = musicians[i] + " plays " + instruments[i]
    arr.push(str)
  }
  return arr
}

function johnLennonFacts(arr) {
  for(let i=0; i<arr.length; i++) {
    arr[i] = arr[i] + "!!!"
  }
  return arr
}


function iLoveTheBeatles(num) {
  let arr = new Array()
  do {
    arr.push("I love the Beatles!")
  } while(num++ < 14) ;
  return arr
}
