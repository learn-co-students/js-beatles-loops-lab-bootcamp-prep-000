var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian",
"He was a choir boy and boy scout", "He hated the sound of his own voice"]
//
function theBeatlesPlay(musicians, instruments) {
  var instrumentsPlayed = [];
  for (var i = 0; i < musicians.length; i++) {
    instrumentsPlayed.push(musicians[i] + " plays " + instruments[i])
  }
   return instrumentsPlayed
}
//
function johnLennonFacts(a) { 
  var n = 0;
  while (n < a.length) {
    a[n] = a[n] + "!!!";
    n++
  } 
  return a
}
//
function iLoveTheBeatles(n) {
  var empty2 = [];
  do {
    empty2.push("I love the Beatles!"); 
    n++
  } while (n < 15); 
  return empty2 
}
//
theBeatlesPlay(musicians, instruments);
johnLennonFacts(facts);
iLoveTheBeatles(7);