function theBeatlesPlay(musicians,instruments){
  var newArry = []
  for (var i = 0;i < musicians.length;i++ ){
    newArry.push(musicians[i] + ' plays ' + instruments[i]) ;
  }
  return newArry
}

function johnLennonFacts(facts){
  var newArry = []
  var i = 0
  while (i<facts.length){
    newArry.push(facts[i] + '!!!') ;
    i++
  }
  return newArry
}

function iLoveTheBeatles(num){
  var newArry = []
  var i = 0
  do{
    newArry[i++] = "I love the Beatles!"
  }while (num<15 && i<= num)
 return newArry
}
