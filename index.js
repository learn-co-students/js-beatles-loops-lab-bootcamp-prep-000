function theBeatlesPlay(musicians, instruments){
  var newArr = [];
for (var i = 0; i < musicians.length; i++) {
  newArr.push (musicians[i] + " plays " + instruments[i]);
}
return newArr;
}

function johnLennonFacts (facts){
  var end = [];
  var i = 0;
  while(i < facts.length) {
    end.push(facts[i] + '!!!')
    i++;
  }
  return end;
}

function iLoveTheBeatles(number){
  var empty = [];
  do {
    empty.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  return empty;
}
