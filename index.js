function theBeatlesPlay(musicians, instruments) {
  var results = {};
  for (let i = 0; i<musicians.length; i++) {
    results[i] = musicians[i]+" plays " + instruments[i]
  }
  return results
}

function johnLennonFacts(array) {

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + "!!!"
  }
  return array
}

function iLoveTheBeatles(n) {
  var results = new Array();
  do{
    results.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return results
}
