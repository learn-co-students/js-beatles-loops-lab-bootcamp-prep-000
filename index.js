function theBeatlesPlay(arrayMus, arrayInst) {
  var newArr = new Array();
  for (var x =0; x < arrayMus.length; x++) {
    var newElem = arrayMus[x] + " plays " + arrayInst[x];
    newArr.push(newElem);
  }
  return newArr;
}

function johnLennonFacts(facts){
  var x = 0;
  var newArr = new Array();
  while (x < facts.length) {
    var newElem = facts[x] + "!!!";
    newArr.push(newElem);
    x++;
  }
  return newArr;
}

function iLoveTheBeatles(number) {
  var x = 0;
  var newArr = new Array();
  var newElem = 'I love the Beatles!'
  do {
    x++;
    newArr.push(newElem);

    x < number;
    number++;
  }
  while (number < 15);
  return newArr
}
