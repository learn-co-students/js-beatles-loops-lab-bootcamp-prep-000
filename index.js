function theBeatlesPlay(musicians, instruments){
  var Beatles = []
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  for (let i=0; i<4;i++){
    Beatles.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return Beatles
}

function johnLennonFacts(array){
  var i=0
  while (i<array.length) {
    array[i]=array[i]+"!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(n){
  var Beatles = []
  do {
    Beatles.push("I love the Beatles!")
    n++
  } while (n < 15)

  return Beatles
}
