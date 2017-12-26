var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
    var newArr = [];//from musician and instrument lists, new list matching the musician to their instrument played
    for (var i = 0; i < musicians.length; i++) {
      newArr.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return newArr;
}

const facts = ['He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
  ];
  
function johnLennonFacts(facts) {
  var i = 0;
  var updatedFacts = []; //added exclamation points to all
    while (i < facts.length) {
        updatedFacts.push(`${facts[i]}!!!`);
        console.log(`$updatedFacts[i] !!!`);
        i++;
    }
    return updatedFacts;
}

var n

function iLoveTheBeatles(n) {
  var newArray = [];
  do{newArray.push(`I love the Beatles!`);
    n++;
  } while (n < 15) ;
    return newArray;  
  }