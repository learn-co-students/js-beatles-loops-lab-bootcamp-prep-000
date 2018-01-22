var theBeatlesPlay = function(musiciansArr, instrumentsArr) {
  var beatlesArray = [];
  for(var i = 0;i < musiciansArr.length; i++){
    beatlesArray[i] = musiciansArr[i] + " plays " + instrumentsArr[i];
  }
  return beatlesArray;
}

var johnLennonFacts = function(jlFacts) {
  var i = 0;
  while(i < jlFacts.length){
    jlFacts[i] = jlFacts[i] + "!!!";
    i++;
  }
  return jlFacts;
}

var iLoveTheBeatles = function(num) {
  var beatles = [];
  var i = 0;
  do{
    beatles[i] = "I love the Beatles!";
    i++;
    num++;
  }while(num < 15);
  return beatles;
}