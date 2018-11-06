function theBeatlesPlay(musicianArr, instArr) {
  var resultArr = [];

  for (var i = 0; i < musicianArr.length; i++) {
    var musician = musicianArr[i];
    var instrument = instArr[i];
    var str = `${musician} plays ${instrument}`;

    resultArr.push(str);
  }

  return resultArr;
}


function johnLennonFacts(arr) {
  var lennonFactsArr = [];
  var i = 0;

  while (i < arr.length) {
    var lennonFact = arr[i];

    lennonFactsArr.push(lennonFact + '!!!');
    i++;
  }

  return lennonFactsArr;
}


function iLoveTheBeatles(n) {
  var iLoveBeatlesArr = [];

  do {
    iLoveBeatlesArr.push("I love the Beatles!");
    n += 1;
  } while (n < 15);

  return iLoveBeatlesArr;
}
