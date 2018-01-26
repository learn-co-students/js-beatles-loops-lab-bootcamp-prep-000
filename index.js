
function theBeatlesPlay(musicians, instruments) {
  var introArray = [];
  for (let i=0; i<musicians.length; i++) {
    introArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return introArray;
}

function johnLennonFacts(facts) {
  var excitingFacts = [];
  var i=0;

  while (i<facts.length) {
    excitingFacts.push(facts[i] +"!!!");
    i++;
  }

  return excitingFacts;
}

function iLoveTheBeatles(number) {
  var loveArray = [];

  do{
    loveArray.push("I love the Beatles!")
    number++;
  } while (number < 15) ;

  return loveArray;
}
