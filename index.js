
function theBeatlesPlay(musicians, instruments){

//var array = {};
var array = [];

for (var i = 0; i < musicians.length; i++) {
  //console.log( musicians[i] + " " + instruments[i] +"." );
  //array.push( musicians[i] + " plays " + instruments[i] +"." +`I am ${i}  strange loop`);
  array.push( musicians[i] + " plays " + instruments[i]);
}
return array;
}
function johnLennonFacts(facts) {
var array = [];
for (var i = 0; i < facts.length; i++) {
  array.push( facts[i] + "!!!");
}
return array;
}

function iLoveTheBeatles(i) {

var array = [];
do {
  array.push( "I love the Beatles!");
  //array.pop();

  //console.log(array)
  i++;
} while (i < 15);

return array
}
