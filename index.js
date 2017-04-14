//two parameters - 
function theBeatlesPlay(musicians, instruments){
//empty array stored in local variable
  var e = [];
  //for loop which goes through musicians 
  for( var i = 0; i < musicians.length; i++){
    e.push(`${musicians[i]} plays ${instruments[i]}`); 
  }
  
  return e;
}

function johnLennonFacts(array){
var i = 0;
  while(i < array.length ){
  var exclamation = '!!!';
   array[i] = array[i] + exclamation;
    ++i;
  }
  return array;
}

function iLoveTheBeatles(n){
  var e = [];

  do{e.push('I love the Beatles!');
      n++ 
    }while ( n < 15) 

  return e;
  
}