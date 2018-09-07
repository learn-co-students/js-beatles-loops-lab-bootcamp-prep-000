// add solution here
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])
  }
  return whoPlaysWhat
}

function johnLennonFacts(array){
  var excl = [];
  let i = 0;
  while (i < array.length) {
    excl.push(array[i] + "!!!"); i++
  }
  return excl
}

function iLoveTheBeatles(n) {
  var love = [];
  do {
    love.push("I love the Beatles!"); n++;
  }
    while (n < 15);
    return love
  }  