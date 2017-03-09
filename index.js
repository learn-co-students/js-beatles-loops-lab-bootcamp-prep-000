var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison',
'Ringo Starr'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0; i < musicians.length; i++){
   array.push(musicians[i] + ' plays ' + instruments[i])
 }
  return array;
  }

      function johnLennonFacts(facts){
        var newArr = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        var excitingFacts = []
        var i=0;
        while (i < facts.length){
            excitingFacts.push(facts[i]+"!!!");
            i++;
        }
        return excitingFacts
      }

      function iLoveTheBeatles(n) {
        var love = new Array()
        do {
          love.push("I love the Beatles!");
        } while (love.length < n + 1 && n < 15);
        return love;
      }
