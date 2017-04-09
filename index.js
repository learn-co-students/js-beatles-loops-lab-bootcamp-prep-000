function theBeatlesPlay(musicians, instruments){
  var outputArr = [];

  for (var i = 0; i < musicians.length; i++){
    console.log("Adding to array");
    console.log(musicians[i] + " plays " + instruments[i]);
    outputArr.push(musicians[i] + " plays " + instruments[i])
  }
  return outputArr
}

function johnLennonFacts(array){
  var outputArr = [];
  while(array.length > 0){
    var exclamationString = array.shift() + "!!!"
    console.log(exclamationString);
    outputArr.push(exclamationString)
  }
  return outputArr
}

function iLoveTheBeatles(num){
  var outputArr = [];

  do{
    outputArr.push("I love the Beatles!")
    num++
  } while (num < 15)

  return outputArr
}