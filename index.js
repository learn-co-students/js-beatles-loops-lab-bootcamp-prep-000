function theBeatlesPlay(musicians,instruments) {
  var beatlesarray = [];

  for (var i = 0; i < musicians.length; i++){
    beatlesarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesarray;

}

function johnLennonFacts(jlfacts){
  var johnLennonFacts = [];
  var i= 0;
  while (i < jlfacts.length){
    johnLennonFacts.push(`${jlfacts[i]}!!!`)
    i++;

  }
  return johnLennonFacts;

}

function iLoveTheBeatles(number) {
  var beatles = [];
  do {
    beatles.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return beatles;
}
