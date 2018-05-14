var musicians = ["John Lennon","Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments){
  var about = [];
	for(var x=0; x<musicians.length; x++){
    about.push(`${musicians[x]} plays ${instruments[x]}`)
	}
  return(about);
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
	  var x = []
	  while(facts.length) {
      x.push(`${facts[0]}!!!`)
      facts.shift()
  } 
  return x
}

function iLoveTheBeatles(number){
  var fans = [];
  do{
    fans.push("I love the Beatles!");
    number++;
  }
  while(number < 15);
  return fans
}

  