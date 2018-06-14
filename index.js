var musicians =["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments){
  var emptyArray =[];
  for ( var i = 0; i < musicians.length; i++){
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

var facts=[ "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];

function johnLennonFacts (facts){
 while (facts.length<4){
    console.log(facts[0].pop('!!!'));
}
}

var n = 0

function iLoveTheBeatles (n){
  var emptyArray = [];
  do{
    emptyArray.push('I love the Beatles!')n++
  }while (n<8);
  return emptyArray;
}