// add solution here


function theBeatlesPlay(){
  
  var i = 0
  
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

  var emptyArr = new Array();
  
  for (i = 0; i < musicians.length; i++){
      var string = `${musicians[i]} plays ${instruments[i]}`
      emptyArr.push(string); 
  }
  
  return emptyArr
}

function johnLennonFacts(){
  const facts = [ "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  ];
  var i = 0
  
  var newFacts = new Array();
  
  while (i < facts.length){
    var stringFacts = `${facts[i]}!!!`
    newFacts.push(stringFacts);
    i++;
  }
  
  return newFacts
}


