
var musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"];

var instruments = [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var arrayPlay = [];

      for (var i = 0; i < musicians.length; i++) {
        arrayPlay.push(musicians[i] + ' plays ' + instruments[i]);
      }
    return arrayPlay;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var arrayFacts = []
  var i = 0;

    while (i < facts.length) {
      arrayFacts.push(facts[i] + '!!!');
        i++;
    }
  return arrayFacts;
}

function iLoveTheBeatles(n) {
  var arrayLove = [];
    do {
      arrayLove.push('I love the Beatles!');
      n++;
    } while (n < 15);
  return arrayLove;
}
