function theBeatlesPlay(array_of_musicians, array_of_instruments){
       var  empty_array =[];

       for(var i = 0; i < array_of_musicians.length; i++){
         empty_array.push(array_of_musicians[i] + " " + "plays" + " " + array_of_instruments[i])
       }
       return empty_array;
}
function johnLennonFacts(facts) {
      
     var newFacts = [];
     var i = 0;
     while (i < facts.length) {
         newFacts.push(facts[i] + "!!!");
         i++;
     }
     return newFacts;
 }
 function iLoveTheBeatles(n){
   var f = [];

   do{
         f.push("I love the Beatles!");
         n++;
     }while(n < 15);

     return f;
 }
