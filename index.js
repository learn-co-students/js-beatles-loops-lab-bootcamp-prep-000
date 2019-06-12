var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for(let i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
 }
function johnLennonFacts(array) {
  const newArray= [];
  let i = 0;
  while(newArray.length < array.length) {
    newArray.push(array[i]+"!!!");
    i++;
  }
  return newArray;
}
function iLoveTheBeatles(n) {
  const newArray = []
  let i = 0
  do{ newArray.push("I love the Beatles!")
  n++;
}
  while(n < 15);
  return newArray
}
