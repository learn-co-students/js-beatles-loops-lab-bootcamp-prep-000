// add solution here
function theBeatlesPlay(musician, instrument){
  var pairs = []
  for (var i = 0; i < musician.length; i++){
    pairs[i] = musician[i] + " plays " + instrument[i]
  }
  return pairs
}

function johnLennonFacts(arr){
  var i = 0
  while (arr.length > i){
    arr[i] += "!!!"
    i++
  }
  return arr
}

function iLoveTheBeatles(n){
  var howMuchLove = []
  do {
    howMuchLove.push("I love the Beatles!")
    n++
  }while (n < 15)
  return howMuchLove
}


