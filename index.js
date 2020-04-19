var arrayNew = []

function theBeatlesPlay(arrayMusicians, arrayInstruments){
  for (let i = 0; i < 4; i++){
  arrayNew.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`);
  }
  return arrayNew
}

function johnLennonFacts(array) {
  var n = 0
  var arrayNew2 =[]
  while (n < array.length){
  arrayNew2.push(`${array[n]}!!!`)
  n++;
}
return arrayNew2
}

function iLoveTheBeatles(g){
  let beatlesArray = []
  var count = g
  do {
    beatlesArray.push("I love the Beatles!")
    count++
  }
  while (count < 15);
  return beatlesArray
}