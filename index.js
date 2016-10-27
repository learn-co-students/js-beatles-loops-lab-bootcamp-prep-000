function theBeatlesPlay(musicians, instruments){
var array=[];
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
for (var i=0; i<musicians.length; i++){
array.push(musicians[i] +  " plays "  + instruments[i])
}
return array;
};
