function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`;
    newArr.push(string);
  }
  
  return newArr;
}

function johnLennonFacts(facts) {
  var newArr = [];
  
  var i = 0;
  while(i < facts.length - 1) {
    newArr.push(`${facts[i]}!!!`);
  }
  
  return newArr;
}

function iLoveTheBeatles(num) {
  var newArr = [];
  
  do {
    newArr.push("I love the Beatles!");
  } while (num < 15) {
    newArr.push("I love the Beatles!");
    num++;
  }
  
  return newArr;
}