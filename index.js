const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musician, instrument){
  var array = [];
  for(var i = 0; i < musician.length; i++){
    array.push (musician[i] + " plays " + instrument[i]);
  }
  return array;

  theBeatlesPlay(musicians,instruments);
}
var more = ["foo","bar"]

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(fact){
  var i = 0
  var answer = []
  while(i < fact.length){
    answer.push(fact[i] + '!!!');
    i++;
  }
  return answer
}
johnLennonFacts(facts)


function iLoveTheBeatles(number){
  var answer = []
  do{
    answer.push("I love the Beatles!")
    number++
  }while(number < 15)
  return answer;
}
iLoveTheBeatles(17)
