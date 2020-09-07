function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = []
  for (let i = 0; i < musicians.length; i++){
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlay
}

function johnLennonFacts(array) {
  let i = 0;

  while (i < array.length){
    array[i] = `${array[i]}!!!`;
    i++;
  }
  return array
}

function iLoveTheBeatles(num) {
  var loveArray = []

  do{
    loveArray.push(`I love the Beatles!`);
    num++;
  } while(num < 15);
  return loveArray;
}
