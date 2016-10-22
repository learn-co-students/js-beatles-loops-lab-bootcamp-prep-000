var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians,instruments) {
  var hits = new Array();
  for (var i = 0; i < musicians.length; i++) {
    hits.push(musicians[i] + " plays " + `${instruments[i]}`);

  }
  return hits;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (facts) {
  var i = 0;
  var me = new Array();
  while (facts.length > i) {
    me.push(facts[i]+ "!!!");
    i++;
  }
return me;
}

function iLoveTheBeatles(number) {
 var array = new Array();
var n = number;
 do {
   array.push("I love the Beatles!");
   n++;

 } while ( n < 15);
return array;
}
