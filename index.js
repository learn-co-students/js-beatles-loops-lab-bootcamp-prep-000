function theBeatlesPlay(musicianarray,instrumentarray) {
  var sentencearray = [];
  for (var i=0;i<musicianarray.length && i<instrumentarray.length;i++) {
    sentencearray[i]=`${musicianarray[i]} plays ${instrumentarray[i]}`;
  }
  return sentencearray;
}

function johnLennonFacts (factsarray) {
  var i=0;
  var clonearray = [];
  while (factsarray.length>i) {
    clonearray[i]=`${factsarray[i]}!!!`;
    i++;
  }
  return clonearray;
}

function iLoveTheBeatles (number) {
  var fanarray = [];
  var i=0;
  do{ fanarray[i] = "I love the Beatles!";
    number++;
    i++;
} while(number<15);
return fanarray;
}
