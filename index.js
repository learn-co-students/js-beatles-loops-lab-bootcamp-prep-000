function theBeatlesPlay(name, instrument) {
  var newArray = []
  for (let i = 0; i < name.length; i++) {
    newArray.push(`${name[i]} plays ${instrument[i]}`)
  }
  
  return newArray
}

function johnLennonFacts(array) {
  var newArray = []
  
  let i = 0;
  while(i < array.length) {
    newArray.push(array[i] + "!!!")
    i++
  }
  
  return newArray
}

function iLoveTheBeatles(n) {
  var newArray = []
  
  do {
    newArray.push("I love the Beatles!")
    n++
  } while(n < 15);
  
  return newArray
}