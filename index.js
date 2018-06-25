function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i ++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array){
  var facts = [];
  var i = 0;
  while (i < array.length) {
    facts.push(`${array[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(i) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    i ++;
  } while (i < 15);
return love;
}
