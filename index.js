function theBeatlesPlay(music, instrum){
  var array = [];
  for (var i=0;i<music.length;i++){
  array = [...array,`${music[i]} plays ${instrum[i]}`];
  }
  return array
}

