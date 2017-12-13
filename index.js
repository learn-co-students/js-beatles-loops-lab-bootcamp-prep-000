function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < musicians.length; i++)
  for (i = 0; i < instruments.length; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
 }
  return myArray
}