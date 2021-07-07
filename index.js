// add solution here
function theBeatlesPlay(){
 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var emptyArray=[];
 for (var i=0; i<musicians.length; i++){
   emptyArray.push(musicians[i] + ' plays ' + instruments[i])
 }
 return emptyArray;
}
 //build a while loop
 function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
 facts[i]=facts[i] + "!!!";
i++;
}
return facts;
}
 //do while loop 
function iLoveTheBeatles(number){
    var array=[];
   do{ array.push("I love the Beatles!");
       number++;
      } while (number<15)
          return array;
} 