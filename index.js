function theBeatlesPlay(musician, instrument){
  var plays = [];
  for(var i = 0; i < musician.length; i++){
    plays = [...plays, musician[i] + " plays " + instrument[i]];
    }
    return plays;
}


function johnLennonFacts(arr){
  var c = [];
  var idx = 0;
  while (c.length < arr.length){
    c.push(arr[idx] + "!!!");
    idx++;
  }

  return c;
}

function iLoveTheBeatles(num){
  var love = [];

  do {
    love.push("I love the Beatles!");
    num++;
  } while(num < 15);

  return love;
}
