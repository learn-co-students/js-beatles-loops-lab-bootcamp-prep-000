function theBeatlesPlay(musicians, instruments) {
  var new_arr = []
  var new_str = ""
  i = 0
  for (var i = 0; i < musicians.length; i++) {
  new_str = (musicians[i] + " plays " + instruments[i]);
  new_arr[i] = new_str
  }
  return new_arr
}

function johnLennonFacts(facts) {
  var new_arr = []
  var new_str = ""
  var i = 0
    while (i < facts.length) {
      new_str = facts[i]  + "!!!"
      new_arr[i] = new_str
      console.log(i++)
  }
  return new_arr
}

function iLoveTheBeatles(num) {
  var new_arr = []
  var i = 0
    do {
      new_arr[i] = "I love the Beatles!";
      console.log(num++);
      console.log(i++);
  } while (num < 15);
  return new_arr
}
