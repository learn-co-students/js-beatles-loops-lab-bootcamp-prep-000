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

    array.push(`${array[i]}!!!`)
    i++
  }
    return array
}
