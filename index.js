function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for(var i=0;i<musicians.length;i++){ 
    var whoPlaysWhat = musicians[i]+' plays '+instruments[i]
    emptyArray.push(whoPlaysWhat)
  }
  return emptyArray
}

function johnLennonFacts(facts){  //Function accepts one argument
  var i = 0 //Declare iterator
  while (i < facts.length){ //Iterate range of elements in argument
    facts[i] = facts[i]+'!!!' //appends exclamation points
    i++ // Add one to counter/iterator
  }
  return facts
}

function iLoveTheBeatles(x){
  var parameter = Number(x) // Makes parameter a number
  var counter = 0 // Make a counter
  var loveThemToo = [] // Create blank array
  do{
    loveThemToo.push('I love the Beatles!') //Append a string to array
    counter++
  }
  while(counter <= parameter && parameter < 15) //Checks to see if counter is equal or less than parameter, and if parameter is less than 15
  return loveThemToo //returns precious product

}
