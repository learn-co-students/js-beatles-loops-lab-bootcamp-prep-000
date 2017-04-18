function theBeatlesPlay(musicians,instruments) {
  array = []
  for (var i = 0; i<musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  
  return array
}