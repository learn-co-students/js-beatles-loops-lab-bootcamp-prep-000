function theBeatlesPlay(musicians, instruments) {
  var newArr = {}
  for (var i = 0; i <= musicians.length -1; i++){
    newArr = [...newArr,`${musicians[i]} plays ${instruments[i]}`]
  }
  return newArr
}

function johnLennonFacts(info){
  var i = info.length-1
  var newArr = {}
  while (i >= 0){
    newArr = [`${info[i]}!!!`,...newArr]
    console.log(--i)
  }
  return newArr
}

function iLoveTheBeatles(num){
  var newArr ={}
  var i = num
  do{
    newArr = [...newArr, "I love the Beatles!"]
    console.log(++i)
  }while(i<15)
  return newArr
}
