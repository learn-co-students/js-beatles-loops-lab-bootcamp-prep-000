//Beatles Loops returns an array of strings containing what instruments each instrument plays:
function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];
  for (let i=0; i < musiciansArray.length; i++) {
    newArray[i] = `${musiciansArray[i]} plays ${instrumentsArray[i]}`
  }
  return newArray
}

//Beatles Loops johnLennonFacts returns an array of strings with exclamation points:
function johnLennonFacts(array) {
  var johnArray = [];
  var j = 0;
  while (j < array.length) {
    johnArray[j] = `${array[j]}!!!`
    j++
  }
  return johnArray
}

//Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
function iLoveTheBeatles(n) {
  var newArray = [];
  var i = 0;
  do {
    newArray[i] = "I love the Beatles!"
    n++
    i++
  } while (n < 15);
  return newArray
}
