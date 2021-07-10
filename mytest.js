function iLoveTheBeatles(n) {
  var newArray = []
  do {
    n++
    newArray.push("I love the Beatles!")
  } while (n < 15)
  return newArray
}

console.log(iLoveTheBeatles(15))
console.log(iLoveTheBeatles(16))
console.log(iLoveTheBeatles(5))
