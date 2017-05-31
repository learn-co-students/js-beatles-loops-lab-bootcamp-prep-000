var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
function theBeatlesPlay(musicians, instruments) {
  var theyPlay = []
  for( let i = 0; i < musicians.length; i++ ) {
  theyPlay.push(`${musicians[i]} plays ${instruments[i]}`)
}
return theyPlay
}

function johnLennonFacts(array) {
  let i = 0
  while (i < array.length) {

    array[i] = array[i] + "!!!"
    i++
  }
    return array
}

function iLoveTheBeatles(n) {
  var array = []
  do{
    array.push('I love the Beatles!')
    n++
  } while (n < 15)

  return array
}
