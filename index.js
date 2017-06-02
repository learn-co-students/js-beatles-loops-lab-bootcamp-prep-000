function iLoveTheBeatles(number){
    var results = new Array();
    do {
      results.push("I love the Beatles!")
      number++;
    } while(number < 15)
}

function theBeatlesPlay(musicians,instruments){
  var results = new Array();
  for (let i=0; i<musicians.length; i++){
    results.push(musicians[i] + " plays " + instruments[i]);
  }
  return results
}

function iLoveTheBeatles(number){
  var results = []
  do {
    results.push("I love the Beatles!");
    number++;
  } while (number<15)
  return results;
}

function johnLennonFacts(array){
  //Use a while loop to loop over the facts array and add `"!!!"` to the end of every fact.
  // The function should return an array of strings with exclamation points.
  var i = 0;
  var results = []
  while (array[i]) {
      results.push(array[i] +"!!!");
      i++;
  }
  return results;
}
