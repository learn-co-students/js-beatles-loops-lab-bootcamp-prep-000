function theBeatlesPlay(musicians, instruments) {
  var array = []
  // i = 0 for first array index, musicians.length for number for indexes to iterate through
  for(var i = 0; i <= musicians.length-1; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(array) {
  var countdown = array.length-1;
  var stringArr = array
  while(countdown >= 0) {
    stringArr = array.pop()+'!!!'
    array.unshift(stringArr)
    countdown --
  }
  return array
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push('I love the Beatles!')
    num++
  } while(num < 15)
  
  return array
}