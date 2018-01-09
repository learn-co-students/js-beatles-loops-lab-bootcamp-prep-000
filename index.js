function theBeatlesPlay (musicians, instruments) {

  var theBeatles = [];

  for (var i = 0 ; i < 4 ; i++){
    theBeatles.push (musicians[i] + ' plays ' + instruments[i])
  }
  return theBeatles
}

//as long as there are available indices in the array, the function should add !!! to the end of each string
//we need to mutate the strings themselves, not what strings are within the array
//is it worth trying to mutate the strings themselves, or create new strings with '!!!' on the end,
//and then remove the original strings

function johnLennonFacts (facts) {

  var i = facts.length

    while (i >= 0) {
      --i
      facts [i] = (facts[i] + '!!!')
    }

  return facts

}

function iLoveTheBeatles (n) {

  var iLove = [];

  do {
    iLove.push ('I love the Beatles!')
    ++n
  } while (n < 15);
  return iLove
}
