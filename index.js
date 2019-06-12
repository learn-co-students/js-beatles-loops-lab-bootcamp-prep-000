function theBeatlesPlay(musicians, instruments) {
  var firstArray = [];
  for (let i = 0; i < 5; i++) {
    if (i === 0) {
    firstArray.push(`${musicians[0]} plays ${instruments[0]}`);
    } else {
      firstArray.push(`${musicians${i}} plays ${instruments${i}}`);
    }
  } 
  return firstArray;
}