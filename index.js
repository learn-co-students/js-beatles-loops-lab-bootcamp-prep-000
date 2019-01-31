// add solution here
/// #1
function theBeatlesPlay(musicians, instruments){
  var theBeatles=[];
  
    for (let i=0; i<1; i++){
      theBeatles.push(`${musicians[0]} plays ${instruments[0]}`);
      theBeatles.push(`${musicians[1]} plays ${instruments[1]}`);
      theBeatles.push(`${musicians[2]} plays ${instruments[2]}`);
      theBeatles.push(`${musicians[3]} plays ${instruments[3]}`);
}
return theBeatles;

}   

///#2

function johnLennonFacts(facts){
   let newArray =[]; 
   let i= 0;
   
  while ( i < facts.length) {
    newArray.push(facts[i] + "!!!" );  
    i++;
  }

return newArray;
}


///#3 

function iLoveTheBeatles(n){
  var lastArray= [];
  var loveBeatles = "I love the Beatles!";
  do{
    lastArray.push(loveBeatles);
    n++;
    }
  while(n<15);
  
  return lastArray;
}
