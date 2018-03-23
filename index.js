var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var artistsArray = new Array();
  var musicianPlays = " plays "

  for (let i = 0; i < musicians.length; i++) {
    artistsArray.push(musicians[i] + musicianPlays + instruments[i]);
  }
  return artistsArray;
}
