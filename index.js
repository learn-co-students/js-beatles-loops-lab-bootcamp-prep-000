var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments= ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians, instruments) {
  var lineup = [];
  for (let musiciansIndex = 0; musiciansIndex < musicians.length; musiciansIndex++) {
    lineup.push(`${musicians[musiciansIndex]} plays ${instruments[musiciansIndex]}`);
  }
  return lineup;
}



const facts = ['He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir boy and boy scout', 'He hated the sound of his own voice'];

function johnLennonFacts(facts) {
 var excitingFacts = [];
  while (facts.length > 0) {
    excitingFacts.push(`${facts.shift()}!!!`);
}
return excitingFacts
}

function iLoveTheBeatles(number) {
  var beatleLove = [];
  do {
    beatleLove.push('I love the Beatles!');
    number++;
  } while(number < 15);
  
  return beatleLove
}

