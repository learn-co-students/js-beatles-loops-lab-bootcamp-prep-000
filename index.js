function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}
