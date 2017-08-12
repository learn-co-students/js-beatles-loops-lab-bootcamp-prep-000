

function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  for ( var i = 0; i < instruments.length; i ++) {
    beatles.push(musicians[i] + ' plays ' + instruments[i])
  }
return beatles
}

function johnLennonFacts(array){
  var jl = [];
  for (var i = 0; i < array.length; i++) {
    jl.push(array[i] + '!!!')
  }
  return jl
}

function iLoveTheBeatles(number){
  var bea = []
  do {
    bea.push('I love the Beatles!')
    number++
  } while (number <15)
  return bea
}
