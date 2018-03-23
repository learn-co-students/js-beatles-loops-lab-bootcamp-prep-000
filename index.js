var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["guitar", "bass guitar", "lead guitar", "drums"]

function theBeatlesPlay(musicians, instruments){
  var empty=  [];
    for (var i =0; i < musicians.length; i++){
    empty.push (musicians[i] + " plays " + instruments[i]);
  }
      return empty;
  }

  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He died in 1980"
  ];


  function johnLennonFacts(facts) {
    var result = [];
    var x = 0;
    while (x < facts.length) {
      result.push(facts[x] + "!!!");
      x++}
    return result
  }

function iLoveTheBeatles(number){
  var empty= []
    do {
      empty.push ("I love the Beatles!")
        number++
          } while (number<15);
            return empty
          }
