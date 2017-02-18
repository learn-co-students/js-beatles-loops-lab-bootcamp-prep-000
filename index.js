function theBeatlesPlay(musicians,instruments){
  var listings = [];
  for (var i=0; i<musicians.length; i++){
      var name= musicians[i];
      var item= instruments[i];
    listings.push(`${name} plays ${item}`)
  }
  return listings;
}

function johnLennonFacts(array){
  var arr=[];
  var factsNo = array.length;
  var i = 0;
  while (i < factsNo){
    arr.push((array[i] + "!!!"));
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num){
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    num++;
  } while (num<15){
  }
  return newArr;
}
