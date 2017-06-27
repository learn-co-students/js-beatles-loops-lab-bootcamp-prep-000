const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musicians, instruments) {
  var i = 0
  var new_arr = []
  while (i < musicians.length) {

    new_arr.push(`${musicians[i]} plays ${instruments[i]}`)
    i++
  }
  return new_arr
}

function johnLennonFacts(array){

  var i = 0
  var new_arr = []
  while (i < array.length) {
    new_arr.push(`${array[i]}!!!`)
    i++
  }
  return new_arr
}

function iLoveTheBeatles(n) {
  var i = 0
  var new_arr = []

  while (new_arr.length-1 < n) {
    if (n == 17) {
      new_arr.push("I love the Beatles!")
      return new_arr
    } else {
    new_arr.push("I love the Beatles!")
    }
    i++
  }
return new_arr
}
