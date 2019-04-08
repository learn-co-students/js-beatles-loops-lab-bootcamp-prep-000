const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Lead Guitar", "Bass Guitar", "Guitar", "Drums"];

var array = []

function theBeatlesPlay(musicans, instruments) {
  var counter = 1
  for (counter = 0; counter < 4; counter++) {
     array.push(""+ musicians[counter] +" plays "+ instruments[counter] +"");
  }
  
  return array
}


const facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];




function johnLennonFacts(facts) {
  let number = facts.length
  
   while (number >=0) {
     
   number--
   facts[number] = facts[number] + "!!!"
     
   }
  
  return facts
   
}



function iLoveTheBeatles(number) {
  var array = []
  
  
do {
  
  array.push("I love the Beatles!");
} while (++number < 15 );
 

  return array
  
}

// add solution here