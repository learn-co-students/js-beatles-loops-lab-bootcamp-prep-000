function theBeatlesPlay(musicians, instruments){
var array=[];
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
for (var i=0; i<musicians.length; i++){
array.push(musicians[i] +  " plays "  + instruments[i])
}
return array;
};


function johnLennonFacts(facts){
var arr=[];
var i=0
while (i<facts.length) {
  arr.push(facts[i] + "!!!")
  i++;
}
  return arr;
};



function iLoveTheBeatles(number){
  var empty_array=[];
  do {
    empty_array.push('I love the Beatles!');
    number++
}
while (number<15) ;
return empty_array;
};
