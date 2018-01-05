
  
   const punct = "!!!";
  // newarr = [fact, fact2, fact3, fact4];
function theBeatlesPlay(musicians, instruments){
  var artistInstrument = [];
  for (let i = 0; i < musicians.length; i++){
    artistInstrument[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return artistInstrument;
  
}
function johnLennonFacts(arr){
  var newarr = arr;
  for (let i = 0; i < arr.length; i++){
    newarr[i] = `${[arr[i]]}${punct}`;
  }
return newarr;
}
function iLoveTheBeatles(n){
 const statement = "I love the Beatles!";
 var namearray = [];
  if (n < 15) {
   do {
    // for (let i = 1; i < n; i++){
       namearray.push(statement);
        
         n--;
      }
   while (n > -1)
  }
  else {
     namearray = ["I love the Beatles!"];
  }
  return namearray;
}