const musicians = [
  "John Lennon", 
  "Paul McCartney", 
  "George Harrison", 
  "Ringo Starr"
  ];

const instruments = [
  "Guitar", 
  "Bass Guitar", 
  "Lead Guitar", 
  "Drums"
  ];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

function theBeatlesPlay(musicians, instruments) {
  let whoPlaysWhat = [];

  for (let i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return whoPlaysWhat;
}

function johnLennonFacts(facts) {
  let i = 0;
  let arrayOfStrings = [];


  while (i < facts.length) {
    arrayOfStrings.push(`${facts[i]}!!!`);
    i++;
  }

  return arrayOfStrings;
}

function iLoveTheBeatles(n) {
  var whoILove = [];
  do {
    whoILove.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return whoILove;
}

