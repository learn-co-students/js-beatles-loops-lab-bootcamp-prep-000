// add solution here
function theBeatlesPlay(musicians,instruments){
  var whattheplay = []
  for (var i = 0; i < musicians.length; i++) {
    whattheplay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return(whattheplay)

}
function johnLennonFacts(array){
  var emptyarray = []
  var count = array.length
  while(count>0){
    for (var i = 0; i < array.length; i++) {
      emptyarray.push(`${array[i]}!!!`)
      count--
  }
}
  return(emptyarray)
}

function iLoveTheBeatles(number){
  var emptyarray1 = []
  do {
    if(number<15){
      var numberOftimes = 15 -number
      for (var i = 0; i <numberOftimes; i++) {
        emptyarray1.push("I love the Beatles!")
    }
  }
    else if (number>=15){
        emptyarray1.push("I love the Beatles!")
    }
  return(emptyarray1)
  } while (number >1);
}
