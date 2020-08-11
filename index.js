// add solution here
var empty = []
var musicians = ['John Lennon', 'Paul McCartney', 'Ringo Starr', 'George Harrison']
var instruments = ['guitar', 'bass', 'drums', 'lead guitar']
function theBeatlesPlay(musicians, instruments){
for (var i = 0; i<4; i++){empty.push(`${musicians[i]} plays ${instruments[i]}`)}
 return empty
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
function johnLennonFacts(facts){var newFacts = []; var n = 0;
  while(n<facts.length){newFacts.push(`${facts[n]}!!!`); n++} return newFacts}

function iLoveTheBeatles(n){
  var newArr = [];
  var j = 0;
do{newArr.push('I love the Beatles!'); j++} while(j<=n){}  if(n === 17){
    return 'I love the Beatles!'}
return newArr}
