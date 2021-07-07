const musiciansBeatles = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instrumentsBeatles = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var whatBeatlesPlay = [];
  for(let i = 0; i <= 3; i++) {
    whatBeatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return whatBeatlesPlay
}

const factsLennon = [
  'Fact 1',
  'Fact 2',
  'Fact 3'];

function johnLennonFacts(facts) {
  let i = 0
  while(i < facts.length) {
    facts[i] = facts[i] +'!!!';
    i++
  }
  return facts
}

console.log(johnLennonFacts(factsLennon))

function iLoveTheBeatles(number) {
  var loveLoveLove = [];
  do{
    loveLoveLove.push('I love the Beatles!');
    number++
  } while(number < 15)
  return loveLoveLove
}