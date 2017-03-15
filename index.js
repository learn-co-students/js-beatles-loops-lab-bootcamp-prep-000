function theBeatlesPlay(musicians, instruments){
  var array = []
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    for (var i=0;i<musicians.length;i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
  }

    function johnLennonFacts(array){
      var facts = ["He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"];
      var i = 0;
      while (i < array.length){
        console.log(array[i] += "!!!");
        i++;
      }
      return array;
      }

function iLoveTheBeatles(n){
var array = []
      do {
        console.log(array.push('I love the Beatles!'));
          n++;
      } while (n < 15);
      return array
    }
