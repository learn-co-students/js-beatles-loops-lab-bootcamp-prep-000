function theBeatlesPlay (musician, instrument) {
  var musicians = [];

  for (var i = 0; i < musician.length; i++){
    var musicianPlays = musician[i] + " plays " + instrument[i];
    musicians.push(musicianPlays);
  }

  return musicians;
}

function johnLennonFacts (array) {
  var factsWithExcl = [];
  var i = 0;

  while (i < array.length){
    factsWithExcl.push(array[i] + "!!!")
    i++;
  }

  return factsWithExcl;
}

function iLoveTheBeatles (num) {
  var results = [];
  var inc = num;

  do {
    results.push("I love the Beatles!");
    inc++;
  } while (inc < 15);

  return results;
}
