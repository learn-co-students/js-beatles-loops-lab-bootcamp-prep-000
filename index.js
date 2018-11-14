var emptyArray = []

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++)
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  return emptyArray
}

function johnLennonFacts(facts) {
  var newArray = []
  let i = 0
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`)
    console.log(++i)
  }  return newArray
}

function iLoveTheBeatles(number) {
  var thisArray = []
  do {thisArray.push(`I love the Beatles!`)
    console.log(number++)
  } while (number < 15);
  return thisArray
}

//function doWhileLoop(myarray) {
//  do {myarray.shift()
//  } while (myarray.length > 0)
//  return myarray
//}
