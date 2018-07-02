const musicians = ["John Lennon", "Skillet", "Paramore"]
const instruments = ["Guitar", "Drums", "Voice"]


function theBeatlesPlay(musicians, instruments){
  let beatles = []
  for(var i = 0; i < musicians.length; i++){
    for(var j = 0; j < instruments.length; j++){ 
      console.log(`${musicians[i]} play ${instruments[j]}`)
    }
  }
}