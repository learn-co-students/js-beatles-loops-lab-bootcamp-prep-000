function johnLennonFacts (array) {
  var count = 0;
  while (count < array.length) {
    array[count] = array[count]+"!!!"
    count += 1
  }
  return array
}

function iLoveTheBeatles (num) {
  var arr = []
  var increment = num
  do {
    arr.push("I love the Beatles!")
    num += 1
  } while (num < 15);
  return arr
}

function theBeatlesPlay (musicians, instruments) {
  var newArr = []
  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i]+" plays "+instruments[i]
    newArr.push(str)
  }
  return newArr
}
