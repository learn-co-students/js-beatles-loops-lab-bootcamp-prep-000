
function theBeatlesPlay(array) {  
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
    for (let i= 0; i <5; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}


function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while(i < facts.length){
  	var string = facts[i] + "!!!";
  	newFacts.push(string);
  	i++;
  }
  return newfacts
}


function iLoveTheBeatles(array) {
 
  var i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  }
  do {
    console.log("I love the Beatles!");
  }
  while (incrementVariable() < 15);
}
