function theBeatlesPlay(mus, inst) {
  var aster = []
  for ( var j = 0; j < mus.length && j < inst.length; j++) {
    aster.push(mus[j] + ' plays ' + inst[j])
  }

  return aster
}

function johnLennonFacts(array) {
  var toothless = []
  var i = 0
  while (i < array.length) {
    toothless.push(array[i] + "!!!")
    ++i
  }
  return toothless
}

function iLoveTheBeatles(int) {
  var nightFury = []

  do {
    nightFury.push("I love the Beatles!")
    int++
  } while (int < 15)
  return nightFury
}
