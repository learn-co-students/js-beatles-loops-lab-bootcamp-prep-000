const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var myArray = [];

function theBeatlesPlay(musicians,instruments){
     var i = musicians.length;
     for (var j=0; j <  i ; j++){
          myArray.push(`${musicians[j]} plays ${instruments[j]}`);
     }
     return myArray;
}



function johnLennonFacts(facts){
  var myArray2 = [];
  var i = facts.length;
  for (var j=0; j <  i ; j++){
       myArray2[j] = (`${facts[j]}!!!`);
  }
  return myArray2;
}

function iLoveTheBeatles(number){
     var myArray = [];
     do{
       myArray.push('I love the Beatles!');
       number++;
     } while(number<15);
     return myArray;
}
