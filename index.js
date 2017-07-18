function theBeatlesPlay (musicians,instruments) {
  let myvar =[]
  for (var i = 0; i < musicians.length; i++) {
    myvar.push (musicians [i] + " plays " + instruments [i])
  }
  return myvar
}

function johnLennonFacts (Facts) {
  const newfacts = []
for (var i = 0; i < Facts.length; i++) {
  newfacts.push (Facts [i] + "!!!")
}
  return newfacts
}

function iLoveTheBeatles (num) {
  let emptyarray = []
  do { emptyarray.push ("I love the Beatles!")
  num++
//I don't understand why num isn't defined
} while ( num < 15);
return emptyarray
}
