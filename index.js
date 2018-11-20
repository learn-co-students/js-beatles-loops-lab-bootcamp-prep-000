// add solution here
var musicians = ["jagger","mercury", "madonna"]; 

var instruments = ["drums", "bass", "piano" ]; 

function theBeatlesPlay(musicians, instruments){
 for (i=0; i<musicians.length; i++){
   console.log (`${musicians[i]} plays ${instruments[i]}`); 
 } 
} 

theBeatlesPlay(musicians, instruments); 
