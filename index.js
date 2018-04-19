function theBeatlesPlay(arrayMusicians, arrayIns)  {
  var arrayCombine = [];
  for (var index = 0; index < arrayMusicians.length && index < arrayIns.length; index++)  {
    arrayCombine.push(arrayMusicians[index] + ' plays ' + arrayIns[index]);
  }
  return arrayCombine;
}

function johnLennonFacts(arrayJLFacts)  {
  var arrayWithExclamation = [];
  var index = 0;
  while (index < arrayJLFacts.length)  {
    arrayWithExclamation.push(arrayJLFacts[index] + '!!!');
    index++;
  }
  return arrayWithExclamation;
}

function iLoveTheBeatles(loopCheck)  {
  var arrayLoveBeatles = [];
  do  {
    arrayLoveBeatles.push('I love the Beatles!');
    ++loopCheck;
  } while (loopCheck < 15);
  return arrayLoveBeatles;
}

