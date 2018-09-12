function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    if (i === 0) {
      array.push(`${musicians[0]} plays ${instruments[0]}`);
    }
    else if (i === 1) {
      array.push(`${musicians[1]} plays ${instruments[1]}`);
    }
    else if (i === 2) {
      array.push(`${musicians[2]} plays ${instruments[2]}`);
    }
    else if (i === 3) {
      array.push(`${musicians[3]} plays ${instruments[3]}`);
    }
  }
  return array;
}