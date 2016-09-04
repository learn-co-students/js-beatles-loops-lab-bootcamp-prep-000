const musicians = [
'John Lennon',
'Paul McCartney',
'George Harrison',
'Ringo Starr'];

const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

theBeatlesPlay(musicians,instruments);

function theBeatlesPlay(musicians,instruments){
  var beatArray = [];
  for(var i=0; i<musicians.length; i++){
    beatArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);

function johnLennonFacts(facts) {
  var j = 0;
  while (j<facts.length) {
    facts[j] = facts[j] + '!!!';
    j++;
  }
  return facts
}

function iLoveTheBeatles(n){
  var loveArray = [];
  do{
    loveArray.push('I love the Beatles!');
    n++;
  }while(n<15)

  return loveArray
}
