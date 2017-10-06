function theBeatlesPlay(musicians,instruments){
  var array = []//{ musicians, instruments}
  //var newObj = Object.assign({}, obj)
  for (let i = 0; i < musicians.length; i++){
    //newObj = Object.assign({}, '${musicians[i]} plays ${instruments[i]}')
    var musician = musicians.i
    var instrument = instruments.i
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  var i = 0
  while (i < facts.length) {
    array.push(facts[i] + '!!!')
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
    i+=1
  }
  while ((n <= 15) && (i <= n))
  return array
}
