
var string;
function theBeatlesPlay(array,instruments)
{
  var empty=[];
for (var i = 0; i < array.length; i++)
{
 string=`${array[i]} plays ${instruments[i]}`;
 empty=[...empty,string]
 }
 return empty
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

//second test

function johnLennonFacts(facts) {

var i=0;
var exclamation=[];
while (i<facts.length ){
  string=`${facts[i]}!!!`;
  exclamation=[...exclamation,string];
  i++

}

  return exclamation
}

//third test

function iLoveTheBeatles(n) {
  var empty=[];
  string='I love the Beatles!'
  do {
    n++
    console.log(n)
    empty=[...empty,string]
  }

  while(n<15)

  return empty
} 
