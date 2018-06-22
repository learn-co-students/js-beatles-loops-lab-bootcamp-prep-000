function theBeatlesPlay(arr, instr) {
  var out = [];
  for (var i = 0; i < arr.length; i++) {
    out.push(`${arr[i]} plays ${instr[i]}`)
  }
  return out
}

function johnLennonFacts(arr) {
  var i = 0
  var out = [];
  while (i < arr.length) {
    out.push(arr[i++] + '!!!')
  }
  return out
}

function iLoveTheBeatles(num) {
  var out = [];
  do {
    out.push('I love the Beatles!')
    num++
  } while (num < 15);
  return out
}
