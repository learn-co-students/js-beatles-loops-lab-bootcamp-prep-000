function theBeatlesPlay(){
var array = [];
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

for (var i =0; i <4; i++)
array.push(`${musicians[i]} plays ${instruments[i]}`)
  return array
}

function johnLennonFacts(array){
var i = 0;
  while (i < array.length) {
  array[i] = `${array[i]}!!!`
  i++;
}
  return array
}

function iLoveTheBeatles(n){
  var array = [];
  do { array.push("I love the Beatles!")
  n++;
}while ( n < 15 );
  return array
}
