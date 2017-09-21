var musicArray;
function theBeatlesPlay(musicians, instruments) {
  var musicArray = [];
  for(var i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " " + "plays" + " " + instruments[i];
    musicArray.push(sentence);
      }
        return musicArray
}

function johnLennonFacts(array) {
  const facts = [];
  var i = 0;
  var amazingFacts = [];
  while(i < array.length){
        var exclamationPoints = "!!!";
        amazingFacts.push(array[i] + `${exclamationPoints}`);
        i++;
        }
        return amazingFacts
      }

function iLoveTheBeatles(number) {
  var beatlesArray = [];
  var sentence = "I love the Beatles!";
  do {
      beatlesArray.push(sentence);
      number++;
  }
  while(number < 15);
 return beatlesArray
}
