function theBeatlesPlay(arrayMusicians, arrayInstruments){
var results =[];
for(var i=0; i<arrayMusicians.length; i++){

    results.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
}
  
return results;
}

function johnLennonFacts(array){
  var i = 0;
  var results =[];
  while (array[i]){
    results.push(array[i]+"!!!"); i++
    
  }
  return results
}

function iLoveTheBeatles(number) { 
  
 let newArray = []; 
 do {
    newArray.push(`I love the Beatles!`); 
  number++;
 } while (number < 15); return newArray; }