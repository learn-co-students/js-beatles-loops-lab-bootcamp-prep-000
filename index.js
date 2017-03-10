

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++ ) {
    array.push((musicians[i] + " plays " + instruments[i]));
  }
  return array;
}

function johnLennonFacts(facts) {

var facts2 = [];
 var i = 0;
  
while ( i < facts.length) {
   
  var str = facts[i] + "!!!";
  facts2.push(str);
  i++;
 }

  return facts2;
}

function iLoveTheBeatles(i){
  var array = [];
  do {
    array.push("I love the Beatles!");
    i++;
  
  }
  while (i < 15);
  return array;
}

