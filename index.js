function theBeatlesPlay(musicians,instruments){
  const array = []
  for (var i = 0;i < musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i]
    array.push(string)



  }
  return array
}
function johnLennonFacts(facts){
  var n = 0
  var array = []
  while(n<facts.length){

    var string = facts[n] + "!!!"
    array.push(string)
    n++
  }
  return array
}
function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
    number ++
  } while(number < 15)
  return array
}
