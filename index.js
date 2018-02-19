var musicians = ['John Lennon','Paul McCartney', 'George Harrison', 'Ringo Star'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}



function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var array = [];
  do{
    array.push("I love the Beatles!");
    console.log(n++)}
    while(n < 15);
    return array;
}
