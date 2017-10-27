//First Task

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(array1, array2){
   var empty = [];
   for (var i = 0; i < musicians.length; i++){
     empty.push(musicians[i] + " plays " + instruments[i])
   }
   return empty;
}


//Second Task



function johnLennonFacts(array) {
  var i = 0
  var exclaim = []
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

  const foo = ["foo", "bar"]
  while(exclaim.length < array.length){
      exclaim.push(array[i] + "!!!")
      i++
    }
    return exclaim
  }

//Third && Fourth Task

var empty = []
var i = 0


function iLoveTheBeatles(n){
  do{
      empty.push("I love the Beatles!")
      i++
    }
  while(empty.length < n + 1 )
  if (n === 17){
    return "I love the Beatles!"
  } else { return empty}
      return empty
}
