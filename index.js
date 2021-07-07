var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musician, instrument){
  var list = [];
  for (var i = 0; i <= 3; i++){
    list.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return list;
}


function johnLennonFacts(facts){
  var list = [];
  var i = 0;
  while (i < facts.length){
    list.push(`${facts[i]}!!!`);
    i++;
  }
  return list;
}

function iLoveTheBeatles(n){
 var list = [];
   function incrementVariable() {
  n += 1;
  }
  do {
    incrementVariable();
    list.push("I love the Beatles!");
  } 
  while (n <= 14);
  return list;
} 




