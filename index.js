function theBeatlesPlay(musicians, instruments) {
  var beatlesLoops = Array();
  for (let i=0; i < musicians.length; i++){
    beatlesLoops.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatlesLoops;
}

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(n) {
   var beatles = Array();
   do {
    beatles.push("I love the Beatles!");
    n++;
  } while (n<15);
  return beatles;
}
