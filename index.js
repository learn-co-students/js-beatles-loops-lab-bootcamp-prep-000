function theBeatlesPlay (musicians, instruments) {
  var whatTheBeatlesPlay = [];

  for (let i = 0; i < 4; i++) {
    whatTheBeatlesPlay.push( musicians[i] + " plays " + instruments[i]);
  };

  return whatTheBeatlesPlay;

}


function johnLennonFacts (array) {
  var factsAboutJohnLennon = [];
  var i = 0;
  while (i < array.length) {
    factsAboutJohnLennon.push( array[i] + "!!!");
    i++;
  }

  return factsAboutJohnLennon;
}

function iLoveTheBeatles (n) {
  var howILoveTheBeatles = []

  do {
    howILoveTheBeatles.push("I love the Beatles!");
  } while (n++, n < 15);

  return howILoveTheBeatles;
}
