function theBeatlesPlay(musicos,instruments) {
var Lista = new Array()
  for (var i = 0; i < musicos.length; i++) {
    Lista[i]=(musicos[i] + " plays " + instruments[i])    
  }
  return Lista
}