const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i=0; i<4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
        ];
 
  var array = [];
  var j =0;
  while(array.length < facts.length){
    array.push(facts[j]+"!!!");
    j++;
  }
  return array;
}


function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number+=1;
    
  }while(number<15){
    return array;
  }
}
