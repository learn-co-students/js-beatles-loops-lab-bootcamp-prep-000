

function theBeatlesPlay(musicians, instruments){

  var array = []


  for (var i=0; i<musicians.length; i++){
    var name =  musicians[i]
    var inst = instruments[i]
    var str = name + " plays " + inst
    array.push(str)
  }

  return array
}



function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){

    facts[i] += "!!!"
    i++;
  }

  return facts
}


function iLoveTheBeatles(num){
  var array = []

  do{
    array.push("I love the Beatles!")
    num++
  }while(num<15)
  return array
}
