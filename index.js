function theBeatlesPlay(musicians,instruments) {
  var result = []
  for (var i=0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(lennonfacts) {
  var result =[]
  var testnumber = 0
  while (testnumber<lennonfacts.length) {
    result.push(lennonfacts[testnumber++] + '!!!')
  }
  return result
}

function iLoveTheBeatles(n) {
  var result = []
  do {
    result.push(`I love the Beatles!`)
    n++
  } while (n<15)
  return result
}
