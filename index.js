var musicians = [];
var instruments = []

function theBeatlesPlay(musicians, instruments){
var array = [];
for (var i = 0; i < musicians.length; i++){
array.push (musicians[i] + " plays " + instruments[i]);
  //console.log (musicians[i] + " plays " + instruments[i]); didnt work because we need to add to arr, then return arr
  //return doesnt work with loop. use console.log "return (musicians[i] " plays " instruments[i])""
}
return array;
}


function johnLennonFacts(facts){
/*while (var i = 0; i < facts.length){
console.log (facts[i])};*/
var lennonFacts = [];
var i = 0;
while (i < facts.length){
  lennonFacts.push (facts[i] + "!!!");
  i++;
}
return lennonFacts;

}


function iLoveTheBeatles(n){
var number = 0;
var beatlesLove = [];
do{
  beatlesLove.push ('I love the Beatles!')
  n++;
}
while (n < 15)
return beatlesLove;
}
