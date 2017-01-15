const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function theBeatlesPlay (musicians, instruments){
var tab= [];
  for (let i = 0; i < musicians.length; i++) {
    var mot ="";
    mot = musicians[i] +" plays " + instruments[i];
    tab.push(mot);
    }
    return tab;
}
function johnLennonFacts (faits){


  var tab= [];
    for (let i = 0; i < faits.length; i++) {
      var mot ="";
      mot = faits[i] +"!!!" ;
      tab.push(mot);
      }
      return tab;

 }
 function iLoveTheBeatles (nombre){
  var tab= [];
  do {

    tab.push("I love the Beatles!");
    nombre++;
  } while(nombre<15)
  return tab;
}
