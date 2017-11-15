// theBeatlesPlay
function theBeatlesPlay(musicians, instruments) {
  var beatlesMusicians = [];
  var n = 0;
    for (let i = 0; i < 4; i++) {
      beatlesMusicians.push(`${musicians[n]} plays ${instruments[n]}`)
      n++
    }
  return beatlesMusicians
}

// johnLennonFacts
function johnLennonFacts(array) {
  var newJohnArray = [];
  var i = 0;
    while (i < array.length) {
      newJohnArray.push(`${array[i]}!!!`)
      i++
    }
  return newJohnArray
}

function iLoveTheBeatles(n) {
  var loveArray = [];
    do {
      loveArray.push("I love the Beatles!")
    } while (n++ && n < 15)
  return loveArray
}
