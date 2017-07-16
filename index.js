function theBeatlesPlay(musicians, instruments) {
  var ans = [];
  for (let i = 0; i < musicians.length;i++) {
    ans[i] = musicians[i] + ' plays ' + instruments[i];
  }
  return ans;
}

function johnLennonFacts(array) {
  var ans = [];
  let i = 0;
  while (i < array.length) {
    ans[i] = array[i] + '!!!';
    i++;
  }
  return ans;
}

function iLoveTheBeatles(int) {
  var ans = [];
  do {
    ans.push('I love the Beatles!');
    int--;
  } while(int < 15 && int >= 0);
  return ans;
}
