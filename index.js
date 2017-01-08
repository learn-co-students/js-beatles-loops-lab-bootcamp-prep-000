var theBeatlesPlay = function(arrayOfMusicians, arrayOfInstruments){
  var emptyArr = []
  for(var i = 0; i< arrayOfMusicians.length; i++){
  var artist = arrayOfMusicians[i];
  var instruments = arrayOfInstruments[i];
  emptyArr.push(`${artist} plays ${instruments}`)
}
  return emptyArr

  }

var johnLennonFacts = function(array){
  var i = 0;
  while (i < array.length) {
  array[i] = array[i] + "!!!" //That says, set the current element equal to the current element plus our exclamation points
    i++
  }
  return array
}

var iLoveTheBeatles = function(n){
  var arr = []
  do {
    arr.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return arr
}
