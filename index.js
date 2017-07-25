

function theBeatlesPlay(musicians, inst){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${inst[i]}`)
  }
  return arr
}

function johnLennonFacts(arr){
  var i = 0
  while (i < arr.length){
    arr[i] = `${arr[i]}!!!`
    i++
  }
  return arr
}

function iLoveTheBeatles(num){
  let arr = []

  do{
    arr.push('I love the Beatles!')
    num++
  } while (num < 15)

  return arr

}
