function theBeatlesPlay(musicians, instruments) {
  var mus = []
  for (let i = [0]; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    mus.push(string)
  }
  console.log(mus)
  return mus
}
function johnLennonFacts(array) {
  let i = [0]
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++
  }
  return `${array}`
}
function iLoveTheBeatles(n) {
  var loops = []
  do {
    loops.push('I love the Beatles!')
  } while (n++ && n < 15)
  return loops
}
