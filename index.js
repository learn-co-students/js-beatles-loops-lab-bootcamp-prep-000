// add solution here
// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  const array = []
  for(let i = 0; i < musicians.length; i++ ) {
    const str = `${musicians[i]} plays ${instruments[i]}`
    array.push(str)
  }
  console.log(array);
  return array
}

function johnLennonFacts(arr) {
  const array = []

  for(let i = 0; i < arr.length; i++ ) {
    array.push(`${arr[i]}!!!`)
  }
return array
}

function iLoveTheBeatles(n) {
  const array = []

  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15 )
  return array
}

//theBeatlesPlay(musicians, instruments)
