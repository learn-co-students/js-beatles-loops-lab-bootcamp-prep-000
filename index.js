// add solution here



function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var array = new Array(); 
  for (var i = 0; i < musiciansArray.length; i++){
    array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var i = 0
  var a = new Array()
  while(i < array.length){
    a.push(`${array[i]}` + "!!!")
    i++;
  }
  return a;
}

function iLoveTheBeatles(number) {
  var a = new Array();
  do {
    a.push("I love the Beatles!")
    number = number + 1;
  } while(number < 15)
  return a;
}