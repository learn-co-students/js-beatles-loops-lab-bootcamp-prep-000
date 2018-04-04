var musicians=['John Lennon','Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments=['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
var new_array=[];

function theBeatlesPlay(musicians, instruments){
for (var i=0; i<musicians.length && i<instruments.length; i++) {
  new_array.push(`${musicians[i]} plays ${instruments[i]}`)
}console.log(new_array)
return new_array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var lennon = [];
  for (let i=0; i<facts.length; i++){
    lennon.push(`${facts[i]}!!!`)
  }console.log(lennon)
  return lennon
}

function iLoveTheBeatles(n){
  var beatles = [];
  do {beatles.push('I love the Beatles!')*n
    n++;
  }
  while (n<15);
  return beatles
}
  

