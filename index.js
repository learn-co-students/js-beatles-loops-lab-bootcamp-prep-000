function theBeatlesPlay (musicians, instruments) {
  var musiciansWithIstruments = []
  
  for (i = 0; i < musicians.length(); i++) {
    let statement = musicians[i] + ' plays ' + instruments[i]
    musiciansWithIstruments.push(statement)
  }
  
  return musiciansWithIstruments
}