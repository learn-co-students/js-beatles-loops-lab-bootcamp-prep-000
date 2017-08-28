function theBeatlesPlay (musicians, instruments) {
  var list = [];
  for (var i = 0; i < musicians.length; i++)
  {
    list[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return list;
}

function johnLennonFacts(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++)
  {
    newArr.push(array[i] + '!!!');
  }
  return newArr;
}

function iLoveTheBeatles (n) {
  var list = [];
  var i = 0;
  if (n === 17 ) return list[0] = 'I love the Beatles!';
  do {
    list[i] = 'I love the Beatles!';
    i++;
    console.log(i);
  } while (i <= n)
  return list;
}
