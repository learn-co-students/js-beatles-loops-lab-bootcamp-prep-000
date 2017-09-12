const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay (musicians, instruments) {
  var phrase = [];
  for (var x = 0 ;  x < musicians.length ; x++) {
     phrase.push(musicians[x] + " plays " + instruments[x]);
  }
  return phrase;
}

function johnLennonFacts(anything) {
  var text = [];
  var i = 0;
  while (anything[i]) {
    text.push(anything[i] + "!!!");
    i++;
  }
  return text;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++;
  }
  while (number < 15);

  return love;
}
