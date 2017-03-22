function theBeatlesPlay (arr_musicians, arr_instruments) {
  var arr_empty = []
  for (var i = 0; i < arr_musicians.length; i++) {
    var str_to_add_to_arr_instruments = arr_musicians[i] + " plays " + arr_instruments[i]
    arr_empty.push(str_to_add_to_arr_instruments)
  }
  return arr_empty
}

function johnLennonFacts (arr_facts) {
  var arr_facts_exclamation = []
  var i = 0
  while (i < arr_facts.length) {
    arr_facts_exclamation.push(arr_facts[i] + "!!!")
    i++
  }
  return arr_facts_exclamation
}

function iLoveTheBeatles (n) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15)
  return arr
}
