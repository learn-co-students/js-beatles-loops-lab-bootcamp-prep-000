/* 
function should return array of new paired strings 
accepts 2 parameters, an array of musicians and an array of instruments 
2 arrays, musicians and instruments


musicians[0] + 'plays the ' instruments[0] + '.'

function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;

*/ 
var musicians = [];
var instruments = [];
var music = []; // the function should add / creat this 

 function theBeatlesPlay(musicians, instruments) {
  for ( let i = 0; musicians.length < 5; i++) {
    var string = musicians[i] + " plays " + instruments[i] + ".";
    music.push(string);}
    return music;
}





/* 

*/ 
function johnLennonFacts() {
  
}






/* 

*/ 
function iLoveTheBeatles() {
  
  
}







// add solution here
