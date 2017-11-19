function theBeatlesPlay(musicianArray, instrumentArray){
  var ans = []
  for (let i = 0; i < musicianArray.length; i++){
    ans.push(`${musicianArray[i]} plays ${instrumentArray[i]}`)
  }
  return ans
}

function johnLennonFacts(arr){
  var i = 0
  while(i < arr.length){
    arr[i] += "!!!"
    i++
  }
  return arr
}

function iLoveTheBeatles(n){
  var ans = []
  do {
    ans.push("I love the Beatles!")
    n++
  } while(n < 15)
  return ans
}
