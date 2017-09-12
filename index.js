
function theBeatlesPlay (arrayMusicians, arrayInstruments) {
  var ArrayPlay = new Array();
  for (let i = 0; i < arrayMusicians.length; i++) {
    ArrayPlay.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  return ArrayPlay;
}
function iLoveTheBeatles(numberBeatle) {
    var BeatleArray= new Array();
  do  {
    BeatleArray.push("I love the Beatles!");
    numberBeatle +=1;
  } while (numberBeatle <15);
  return BeatleArray;
}
function johnLennonFacts(arrayBeatles) {
var i = 0;
var OutArray = new Array();
do  {
    OutArray.push(`${arrayBeatles[i]}!!!`);
    i+=1;
} while (i < arrayBeatles.length);
  return OutArray;
}
