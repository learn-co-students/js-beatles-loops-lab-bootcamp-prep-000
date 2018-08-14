// add solution here
function theBeatlesPlay(musicians, instruments) {
  var list = []
  for (var i = 0; i < 4; i++) {
    var result = `${musicians[i]} plays ${instruments[i]}`; 
    list.push(result)
  }
  return list
}

