function johnLennonFacts(facts){
  var arr = []
  for (var i = 0; i < facts.length; i++){
    arr[i] = facts[i] + "!!!"
  }
  return arr
}

function iLoveTheBeatles(n){
  var i = 0
  var arr = []
  do {
    arr.push("I love the Beatles!")
    i += 1
  } while (n < 15 && i <= n);
  return arr
}

function theBeatlesPlay(){
  var arr = []
  arr.push("John Lennon plays Guitar")
  arr.push("Paul McCartney plays Bass Guitar")
  arr.push("George Harrison plays Lead Guitar")
  arr.push("Ringo Starr plays Drums")
  return arr
}
