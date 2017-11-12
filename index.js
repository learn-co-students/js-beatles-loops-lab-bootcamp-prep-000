function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i , musicians.length; i++) {
    array.push(musicians[i] + 'play' + instruments[i])
  }
  return array
}
