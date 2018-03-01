function theBeatlesPlay(musicians, instruments){
  var temparr = [];
  for (let i=0; i < musicians.length; i++){
    temparr[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return temparr;
}

function johnLennonFacts(arr){
  var temparr = [];
  let i = 0;
  while (temparr.length < arr.length){
    temparr[i] = arr[i].concat("!!!");
    i += 1;
  }
  return temparr;
}

function iLoveTheBeatles(num){
  var temparr = [];
  do {
    temparr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return temparr
}