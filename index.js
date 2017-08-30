function theBeatlesPlay (musicians, instruments) {
  var heckyeahmusic = [];
  for (var i = 0; i < musicians.length; i++) {
    heckyeahmusic.push(musicians[i] + " plays " + instruments[i]);
  }
  return heckyeahmusic
}
function johnLennonFacts(factoids) {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFactoids = [];
  var i = 0
  while (i < factoids.length) {
    newFactoids.push(factoids[i] + "!!!")
    i++;
  }
  return newFactoids
}
function iLoveTheBeatles(n) {
  var whomp = [];
  do {
    whomp.push("I love the Beatles!");
    n++
  } while (n < 15);
  return whomp;
}
