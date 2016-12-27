function theBeatlesPlay(array_of_musicians, array_of_instruments){
       var  empty_array =[];
       
       for(var i = 0; i < array_of_musicians.length; i++){
         empty_array.push(array_of_musicians[i] + " " + "plays" + " " + array_of_instruments[i])
       }
       return empty_array;
}
function johnLennonFacts() {
     var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
     var newFacts = [];
     var i = 0;
     while (i < facts.length) {
         newFacts.push(facts[i] + "!!!");
         i++;
     }
     return newFacts;
 }
 