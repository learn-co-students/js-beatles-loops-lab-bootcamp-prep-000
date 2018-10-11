// add solution here

function theBeatlesPlay(listOfMusicians, listOfInstruments){
  var arr = new Array()
  for (var count = 0 ; count < listOfMusicians.length ; count += 1){
    arr.push(`${listOfMusicians[count]} plays ${listOfInstruments[count]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  var arr = new Array()
  for (var count = 0 ; count < facts.length ; count += 1){
    arr.push(facts[count] + "!!!")
  }
  return arr
}

function iLoveTheBeatles(n){
  var arr = new Array()
  do {
    arr.push("I love the Beatles!")
    n += 1
  } while (n<15);
  return arr
}
