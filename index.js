var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for(let i = 0; i < musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  while (i < facts.length) {
    newArray.push(facts[i] +'!!!');
    i++;
  }
  return newArray;
 }

 function iLoveTheBeatles(number) {
  var newArray = [];
  do{
    newArray.push("I love the Beatles!");
    number++;
 } while (number < `15`);
 return newArray;
 }
