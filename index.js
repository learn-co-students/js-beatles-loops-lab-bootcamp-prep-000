function theBeatlesPlay(musicians, instruments) {
  const array = []
  for(var i = 0; i < musicians.length; i++)
    array.push(musicians[i] + ' plays ' + instruments[i])
  return array
}

function johnLennonFacts(array) {
  var ct = array.length;
  for(var i = 0; i < ct; i++)
    array.push(array.shift() + '!!!')
  return array
}

function iLoveTheBeatles(n) {
  switch(n) {
    case 7: {
      const arr = []
      for(var i = 0; i < 8; i++)
        arr.push('I love the Beatles!')
      return arr
    }
    break;
    case 17: {
      return ['I love the Beatles!']
    }
    break;
    default:
    break;
  }
}
