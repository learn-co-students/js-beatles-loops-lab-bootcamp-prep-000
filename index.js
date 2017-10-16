function theBeatlesPlay(musicians,instruments) {
  var Beatles = [];
  var i = 0;
  for(i; i < musicians.length; i++) {
    Beatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return Beatles;
}

function johnLennonFacts(facts) {
  var exclamations = [];
  var i = 0;
  while(i < facts.length) {
    exclamations.push(facts[i] + '!!!');
    i++;
  }
  return exclamations;
}

function iLoveTheBeatles(number) {
  var blank = [];
  do {
    blank.push('I love the Beatles');
  } while(number < 15);

  return blank;

}
