// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drum"]
    
theBeatlesPlay(musicians, isntruments)
var i = 0
  function theBeatlesPlay(musiciansArray, instrumentsArray) {
    var array1 = []
   for (i = 0; i < 4; i++) {
     array1.push(musiciansArray[i] + ' plays ' + instrumentsArray[i])
   }
   return array1
}
