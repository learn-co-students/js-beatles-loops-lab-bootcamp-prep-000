const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
    
function theBeatlesPlay(array1, array2){
  var array3 =[];
  for(var i=0; i<array1.length; i++){
    array3[i] = array1[i] + " plays " + array2[i];
  }
  return array3;
}

console.log(theBeatlesPlay(musicians,instruments));



function johnLennonFacts(array4){
  var i = 0;
  while(i<array4.length){
    array4[i] = array4[i]+"!!!";
    i+=1;
  }
  return array4;
} 

console.log(johnLennonFacts(facts));


function iLoveTheBeatles(num){
  var i = 0;
  var array5 = [];
  do{
    array5[i] = "I love the Beatles!";
    i += 1;
  }while((num+i)<15)
  return array5;
}


console.log(iLoveTheBeatles(17));

