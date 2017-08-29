const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay() {
  var j = []
  for (var i = 0; i < musicians.length; i++) {
  //  var k = console.log(musicians[i] + 'plays' + instruments[i])
    j.push(musicians[i] + " " + 'plays'+ " " + instruments[i])

  }
  return j
}
