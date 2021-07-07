'use-strict';

const musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
function theBeatlesPlay(musicians,instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++)
{
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

const facts=[
'He was the last Beatle to learn to drive',
'He was never a vegetarian',
'He was a choir boy and boy scout',
'He hated the sound of his own voice'
];
function johnLennonFacts(factsArray){
var i=0;
var newArray=[];
while (factsArray.length > i){
newArray.push(`${factsArray[i]}` + '!!!');
i++;
}
return newArray;
}

function iLoveTheBeatles(n){
var strings=[];
do {
n++;
strings.push('I love the Beatles!') } while (n < 15);
return strings;
}