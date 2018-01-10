function theBeatlesPlay(musicians, instruments){
  var Beatles = [];
  for(var i = 0; i < musicians.length; i++){
    Beatles.push(musicians[i]+" plays "+instruments[i]);
  }
  return Beatles;
}
function johnLennonFacts(array) {
  var index = 0
  while  (index < array.length) {
    array[index] = `${array[index]}!!!`
    ++index
  }
  return array
}
function iLoveTheBeatles(number) {
  var iLoveTheBeatles = []
  do {
    iLoveTheBeatles.push('I love the Beatles!')
    ++number
  } while (number < 15);
  return iLoveTheBeatles
}
