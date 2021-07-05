// add solution here
function theBeatlesPlay(musicians,instruments){
  var myArray = []
  var musiciansPlaysStrings
  for( let  i = 0 ; i < musicians.length; i++){

    musiciansPlaysStrings = musicians[i] + " plays " + instruments[i]
    myArray.push(musiciansPlaysStrings)
  }return myArray
}
  function johnLennonFacts(facts){
    var myString
    var emptyFacts =[]
    var i =0
    while (i < facts.length){
      myString = facts[i] + "!!!"
      emptyFacts.push(myString)
      i++
    }
    return emptyFacts
  }
  function iLoveTheBeatles(number){
    var myEmptyArray = [];
    do {
      myEmptyArray.push("I love the Beatles!")
      number++
    }while( number < 15);
    return myEmptyArray
  }
