function theBeatlesPlay(artists, instruments) {
  var matched = [];
  for (let i = 0; i < artists.length; i++){
    matched.push(`${artists[i]} plays ${instruments[i]}`);
  }
  return matched;
}

function johnLennonFacts(facts) {
  var temp = [];
  var i = 0;
  while (i < facts.length) {
    temp.push(facts[i] + '!!!');
    i++;
  }
  return temp
}

function iLoveTheBeatles(num) {
  var temp = [];
  var i = num;
  do { temp.push('I love the Beatles!'); i++;} while(i < 15);
  return temp;
}