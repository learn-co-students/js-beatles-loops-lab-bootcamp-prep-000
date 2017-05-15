const musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];


function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for (let i=0;i<musicians.length;i++){
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
};

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var excited = [];
  let i = 0;
    while(i<facts.length){
      excited.push(`${facts[i]}!!!`);
      i++;
    }
  return excited;
};

function  iLoveTheBeatles(n){
  var love = [];
  do {
    love.push("I love the Beatles!");
    n++
  } while (n<15);
  return love;
};
