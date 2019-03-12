const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "guitar", "bass", "drums"];


function theBeatlesPlay (musicians, instruments){
  for (var i = 0; i < musicians.length ; i++){
    var musicianString = musicians[i] + ' plays ' + instruments[i];
    var musicianInstrument = [];
    musicianInstrument[i] = musicianString;
    
return musicianInstrument;
}
}

