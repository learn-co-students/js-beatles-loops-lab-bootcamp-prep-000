const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments){
  var x = [];
  for (var i = 0; i <= 4; i++ ){
    x.push("${musicians[0]} plays ${instruments[0]}");
  }
  return x;
}
theBeatlesPlay(musicians, instruments)