
 function theBeatlesPlay(musicians, instruments){
var emptyArray = [];

for(var i = 0; i < musicians.length; i++){
  emptyArray.push( musicians[i] + " plays " + instruments[i]);

    }

     return emptyArray;

 }


  function johnLennonFacts(array){
   var s = [];
 var i = 0;
   while(  i < array.length  ){
     s.push(array[i] + "!!!" );

     i++;
   }
   return s;
 }

 function iLoveTheBeatles (num){

  var myArray = []

  do{

   myArray.push("I love the Beatles!")
    num--;
  }while(num>=0 && num<8)

   return myArray

  }
