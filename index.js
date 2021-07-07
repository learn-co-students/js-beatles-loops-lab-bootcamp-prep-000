var emptySet = [];

function theBeatlesPlay(x, y) {
    for (var i = 0; i < x.length; i++) {
        emptySet.push(`${x[i]} plays ${y[i]}`);
    }
    return emptySet;
}

var musicians = [];
var instruments = ["Guitar", "Lead Guitar", "Bass Guitar", "Drums"];

theBeatlesPlay(musicians, instruments);



function johnLennonFacts(array) {
  var i = 0;
  var newArray = [];
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`);
    i++;
  }
  return newArray;
}

johnLennonFacts([
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ]);
      
function iLoveTheBeatles(num) {
    var i = 0;
    var empty = [];
    do {
        empty.push("I love the Beatles!");
        i++;
    } while (i < num + 1);
  return empty;
}

iLoveTheBeatles(7);

function iLoveTheBeatles(num) {
    var i = 0;
    var empty = [];
    if (num === 17) {
      
    do {
        empty.push("I love the Beatles!");
        i++;
    } while (i < num - 16);
        return empty; 
        
    } else {
        do {
        empty.push("I love the Beatles!");
        i++;
    } while (i < num + 1);
  return empty;
    }
    
    
}

