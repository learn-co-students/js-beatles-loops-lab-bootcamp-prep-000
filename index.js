function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (i=0, i<=musicians.length, ++i) {
    array[i] = `${musicians(i)} + 'plays'+ ${instruments[i]}`;
  }
  return array;
}
