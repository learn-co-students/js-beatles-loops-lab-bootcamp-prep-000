

function theBeatlesPlay (musicians, instruments) {

  var empty = [];

  for (let i =0; i<musicians.length; i++){
   var temp = "plays "
   var name = musicians[i]+ " "
   var instrument = instruments[i]
  empty[i]= name + temp+instrument;
  };//end for

  return empty
}


function johnLennonFacts (facts) {

  var init = 0;
  var len = facts.length;
  var i = init;

  while (i<len) {

    facts[i] +="!!!";
    i++;
  }

  return facts;
}


function iLoveTheBeatles (num) {

  var empty = [];
  var counter = 0;

  do {
    empty[counter]= "I love the Beatles!";
    counter++;
    num++;
  }
  while (num<15)

  return empty;
}
