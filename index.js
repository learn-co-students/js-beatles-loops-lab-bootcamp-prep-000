function theBeatlesPlay(musicians, instruments){
  var beatles = [ ];

  for(var i = 0; i < 4; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];

    beatles = [...beatles, `${musician} plays ${instrument}`]
  }

  return beatles;
}

function johnLennonFacts(facts) {
  var i = 0;
  var loudFacts = [];

  while(i < facts.length){
    var fact = facts[i];
    //console.log('which fact', fact)
    loudFacts = [...loudFacts, `${fact}!!!`]
    i++;
  }
  return loudFacts;
}

function iLoveTheBeatles(i) {

  var beatlesArray = [];
  console.log('in the func', i)

  do {
    //beatlesArray = ['I love the Beatles!'];
    beatlesArray = [...beatlesArray, 'I love the Beatles!'];
    i++;
    //console.log(beatlesArray);
  }
  while(i < 15) {
    //beatlesArray = [...beatlesArray, 'I love the Beatles!'];
    //i++;
    //console.log(beatlesArray, i)
    //break;
  }

  return beatlesArray;
}
