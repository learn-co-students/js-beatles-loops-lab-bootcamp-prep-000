function theBeatlesPlay(musicians, instruments){
  var newArray = []

  for(var i = 0; i < musicians.length; i++){
    var string = musicians[i] + ' plays ' + instruments[i];
    newArray.push(string)
  }
  return newArray
}

function johnLennonFacts(facts){
  var newArray = []
  var i = 0

  while(i < facts.length){
    var string = facts[i] + '!!!';
    newArray.push(string)
    i++
  }
  return newArray
}

function iLoveTheBeatles(number){
  var newArray = []

  do{
    newArray.push("I love the Beatles!")
    number++
  }while(number < 15)
  return newArray
}
