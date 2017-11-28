function theBeatlesPlay(musicians, instruments){
  let myArray = [];
  for (let i = 0; i < musicians.length; i++){
    myArray.push(musicians[i] + " plays " + instruments[i])
  }
  return myArray;
}

function johnLennonFacts(array){
  var myArray = [];
  var i = 0;
  while (i < array.length){
    myArray.push(array[i] + "!!!");
    i++;
  }
  return myArray
}

function iLoveTheBeatles(number){
	let myArray = [];
	do {
	myArray.push("I love the Beatles!");
	number++;
} while (number < 15);
	return myArray;
}
