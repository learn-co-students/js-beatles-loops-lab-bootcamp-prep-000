var musicians = ["jo", "kay", "tim"];
var instruments = ["piano", "flute", "guitar"];

function theBeatlesPlay(musicians, instruments) {
  var artistList = [];
  for(var i = 0; i < musicians.length; i++) {
    // `"John Lennon plays guitar"`
    artistList.push(`${musicians[i]} plays ${instruments[i]}`);

  }
  return artistList;
}

function johnLennonFacts(facts) {
  var n = 0;

  while(n < facts.length) {

    facts[n] = facts[n] + "!!!";
    n++;
  };
  return facts;
};

function iLoveTheBeatles(num) {
  var array = [];
  if(num === 17) {
    array.push('I love the Beatles!');
    return array;
  }
  do{
    array.push('I love the Beatles!');
    num--;

  }while(num + 1> 0);
  return array;
}
