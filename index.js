// add solution here
function theBeatlesPlay(musicians, instruments){
  var empty = [ ]
  for (i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + " plays " + instruments[i])
  }
return empty
}