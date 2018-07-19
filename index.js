function theBeatlesPlay (musicians, instruments) {
  let result = []
  for (let i = 0; i < musicians.length; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`) }
  return result
}

function johnLennonFacts (array) {
  let comment = []
  let i = 0
  while (i < array.length){
    comment.push(array[i] + "!!!")
    i++
  }
  return comment
}

function iLoveTheBeatles (n) {
  let final = []
  do {
    final.push("I love the Beatles!")
    n++
  }
  while (n<15) {
  }
    return final
}

