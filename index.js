const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musicians, instruments){
  var msg = []
  var newArray = []
  var i
for (i = 0; i <= musicians.length-1; i++) {


 newArray.push(musicians[i] + ' plays ' + instruments[i]);


}
return newArray;

}


//===============================================================================


const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];


function johnLennonFacts(array){
  var msg = '' //each time loop runs string is written into variable msg
  var newArray = [] // store msg into empty array each time loop runs
  var i = 0 //sets counter to 1


while (i < array.length) {


 newArray.push(array[i] + "!!!");

i++;

}
return newArray;

}


//==============================================================================

function iLoveTheBeatles(number){
  //var msg = '' ; //each time loop runs string is written into variable msg
  var emptyArray = []; // store msg into empty array each time loop runs
  var i = number; //sets counter to 0

//do msg += 'I love the Beatles!'
do {
    emptyArray.push("I love the Beatles!");

    i++;

  }while (i < 15);


 //emptyArray.push(array[i] + "I love the Beatles!");
return emptyArray;

}
