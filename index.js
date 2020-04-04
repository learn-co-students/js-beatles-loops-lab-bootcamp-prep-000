// add solution here
const musicians = ("John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr")
const instruments = ("Guitar", "Bass Guitar", "Lead Guitar", "Drums")

function theBeatlesPlay(musicians, instruments) 
{var newPlayers = []; 
for (let i = 0; i < musicians.length; i++)
{newPlayers.push(musicians[i] + " plays " + instruments[i]);} return newPlayers;
}

function johnLennonFacts(facts) {
var newFacts = [];
var i = 0;
while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}

function iLoveTheBeatles(number) {
  var fans = [];
  do {fans.push('I love the Beatles!'); number++} while(number < 15);
  return fans}