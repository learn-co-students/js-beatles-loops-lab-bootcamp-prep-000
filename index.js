function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array
}
