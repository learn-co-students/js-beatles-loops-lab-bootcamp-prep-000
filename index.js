function theBeatlesPlay(arrayMusicians, arrayInstruments){
 var results =[];
 for(var i=0; i<arrayMusicians.length; i++){

    results.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
}
  
 return results;
}

function johnLennonFacts(array){
  while(array.length>0){
    array.push("!!!");
  }
}

function johnLennonFacts(array){
  var i = 0;
  var results =[];
  while(array[i]){
    results.push(array[i]+"!!!");
    i++;
  }
  return results;
}

function  iLoveTheBeatles (number){
  var results =[];
  
}


// function  iLoveTheBeatles (number){
//   var results =[];
//   var i = 1;
  
//   do{
//     i++;
//     results.push("I love the Beatles!");
//   }
//   while (i>=15);
//   return results;
// }
function  iLoveTheBeatles (number){

  var results =[];
  var i = 0;
  
  do{
    i++;
    results.push("I love the Beatles!");
  }

  while (i<=number);
  if (number<15){  
  return (results);
}
  else {
    return (["I love the Beatles!"]);
  }
}



