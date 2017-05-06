//comment to get this to commit

function theBeatlesPlay(musicians, instruments) {
  return musicians.map((beatle) => {
    return beatle + " plays " + instruments[musicians.indexOf(beatle)];
  });
}

function johnLennonFacts(array) {
  return array.map((str) => str + "!!!");
}

function iLoveTheBeatles(n) {
  let times = 15 - n;
  if (times < 0) {
    return ["I love the Beatles!"];
  }
  else {
    let arr = new Array(times).join(".").split(".");
    return arr.map((a) => "I love the Beatles!");
  }

}
