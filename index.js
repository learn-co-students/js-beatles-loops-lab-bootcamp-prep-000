function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (let i = 0; i < musicians.length; i++) {

      var string = `${musicians[i]} plays ${instruments[i]}`;
      emptyArray.push(string)
 }
 return emptyArray
}

function johnLennonFacts(facts) {
  var string = [];
  var count = 0;

  while(count < facts.length){
     string.push(facts[count] + "!!!");
     count ++;
  }

  return string;
}


function iLoveTheBeatles(n) {
  var newArray = []

  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArray;
}
