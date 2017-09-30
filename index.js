function theBeatlesPlay( musicians, instruments ) {
  var return_array = [];

  for( let x in musicians ) {
    let m = musicians[x]
    let i = instruments[x]
    return_array.push(`${m} plays ${i}`)
  }

  return return_array
}

function johnLennonFacts( arr ) {
  let i = 0
  while( i < arr.length ) {
    arr[i] = arr[i] + "!!!"
    i++
  }
  return arr
}

function iLoveTheBeatles( n ) {
  var arr = []

  do {
    arr.push("I love the Beatles!")
    n++
  } while( n < 15 )

  return arr
}
