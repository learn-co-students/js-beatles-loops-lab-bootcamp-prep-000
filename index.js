const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];   

function theBeatlesPlay(musicians, instruments){
  var array =[];
    for (var i=0; i < musicians.length; i++){
        array.push(`${musicians[i]}` + ' plays '  + `${instruments[i]}`);
  }
      return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var results =[];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count]+ "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(n){
  var array=[];
  do{
    array.push("I love the Beatles!")
    n++;
  } while(n < 15 )
  return array
}
