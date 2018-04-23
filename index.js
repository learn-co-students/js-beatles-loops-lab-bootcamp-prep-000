 function theBeatlesPlay(musicians, instruments) {
var array = [];
 for(var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
 }  return array;
} 

function johnLennonFacts(facts) {
   var res =[];
   while(facts.length) {
     //remove item from facts
     res.push(facts.shift()+'!!!');
     // add to new array +'!!!'
  } 
  // return new array
  return res;
}

function iLoveTheBeatles(a) {
  //empty variable 
  var boo = [];
  //creat a do-while loop
  do{
    //add i love the beatles to the empty array
    boo.push("I love the Beatles!");
    a ++;
  } while(a < 15); 
  return boo;
}

