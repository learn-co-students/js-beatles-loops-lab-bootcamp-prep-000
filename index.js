function theBeatlesPlay(musicians, instruments) {
    var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    var array = [];
   for (var i = 0; i < musicians.length; i++) {
     array.push(musicians[i] + ' plays ' + instruments[i]);
   }
   return array
}

function johnLennonFacts() {
  var facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  var i = 0;
  while (i < facts.lenght) {
    console.log(facts[i] + '!!!');
    i++;
   }
  return facts
}

function iLoveTheBeatles(num) {
  var arr = [];
  var i = 0;
  i = 15 - num;
  i++

  do {
    arr.push("I love the Beatles!");
  } while (num < 15);
 }
