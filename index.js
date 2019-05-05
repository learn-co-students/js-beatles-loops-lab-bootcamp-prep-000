function theBeatlesPlay(musicians, instruments){
  var mus = []
  var str = ""
  for (var i = 0; i < musicians.lenght; i++){
    str = musicians[i] + "plays" + instruments[i]
    mus = [...mus, str]
    // mus = [...mus, musicians[i] + "plays" + instruments[i]]
  }
  
}