//const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
//const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  const array = []
  for (let i = 0, l = musicians.length; i < l; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return array;
}
const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"]

function johnLennonFacts(facts){
  const loud = []
  var i = 0;
  while( i < facts.length){
    loud.push(`${facts[i]}!!!`)
    i++;
  }
  return loud;
}

function iLoveTheBeatles(n) {
  const love = []
  do {
    love.push('I love the Beatles!')
    n++
  } while (n < 15)
  return love;
}
// NOTE: how does this return the phrase 8 times and another singular time?
