learn// add solution here
function theBeatlesPlay(musicians,instruments){
  //body of function creates an empty array, stored in a variable.
  //contains a forloop which loops over the array of musicians.
  //first time through the loop should create a string using the first index of the musicians array, and the first index of the musicians array.
  var beatle=[];
  for (let i=0;i<4;i++){
    beatle.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatle;
  }
  function johnLennonFacts(facts){
    var array=[];
    var i=0;
    while (i<facts.length){
      array.push(`${facts[i++]}!!!`);
     }
      return array;    
  }
  function iLoveTheBeatles(n){
    var array=[];
    do{(n++);
      array.push("I love the Beatles!");
      
    }
  
    while (n<15);
    

     return array;
  }
  

  
     