function theBeatlesPlay(musicians, instruments)
{
  var newArray = [];
  for (var i = 0; i < musicians.length; i++)
  {
    newarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}