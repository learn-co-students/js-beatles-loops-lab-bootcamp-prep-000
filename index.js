function theBeatlesPlay(musicians, instruments){
  var beatlesPlayArray = [];
  for (var i = 0; i < musicians.length; i++) {
    beatlesPlayArray.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return beatlesPlayArray;
}

function johnLennonFacts(array){
  var johnLennonArray = [];
  var i = 0;
  while (i < array.length){
    johnLennonArray.push(`${array[i]}!!!`)
    i++
  };
  return johnLennonArray
}

function iLoveTheBeatles(n){
  var loveTheBeatlesArray = [];
  if(n < 15) {
    do{
      loveTheBeatlesArray.push('I love the Beatles!')
    } while(loveTheBeatlesArray.length <= n);
      return loveTheBeatlesArray;
    } else {
      return "I love the Beatles!"
    };
}
