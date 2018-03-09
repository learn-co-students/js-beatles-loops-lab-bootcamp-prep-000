function theBeatlesPlay(musicians, instruments) {
  var array1 = [];
  for (var i = 0; i < musicians.length; i++) {
    array1.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array1;
}



const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) { 
  var array2 = []; var i = 0;
  while (i < facts.length) {
    array2.push(`${facts[i]}!!!`); i++;
  }
  return array2;
}

//missing parameter 'facts' was what it fail before 


function iLoveTheBeatles(number) {
  var array3 = [];
  do {
    array3.push('I love the Beatles!');
    number++;
  } while (number < 15)
  return array3;
}




