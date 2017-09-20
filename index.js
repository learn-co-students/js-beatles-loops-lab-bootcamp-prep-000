function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [] ;

  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return whoPlaysWhat


}



function johnLennonFacts(facts) {

  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }

  return facts
}

function iLoveTheBeatles(number) {
  var array = [];

  do {
    array.push("I love the Beatles!")
    number++;
  } while (number < 15)

  return array

}
