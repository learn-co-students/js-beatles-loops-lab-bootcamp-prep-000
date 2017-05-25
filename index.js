
function theBeatlesPlay(musicians, instruments){
  var strOfMusiciansAndInstruments = []
  for (var i=0; i < musicians.length; i++){
    var str = `${musicians[i]} plays ${instruments[i]}`
    strOfMusiciansAndInstruments.push(str)
  }
  return strOfMusiciansAndInstruments
}



function johnLennonFacts(someFacts){
  var excitedFacts = []
  for (var i=0; i < someFacts.length; i++){
    var str = `${someFacts[i]}!!!`
    excitedFacts.push(str)
  }
  return excitedFacts
}

function iLoveTheBeatles(num){
  var loveProclamation = []
  do {
    loveProclamation.push("I love the Beatles!")
    num += 1
  } while(num<15)
  return loveProclamation


}
