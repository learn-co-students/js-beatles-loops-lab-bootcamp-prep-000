// add solution here

function theBeatlesPlay() {
  
  var roles = []
  
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

  for (let i = 0; i < instruments.length; i++) {
    roles.push(musicians[i] + " plays " + instruments[i])
  }
  
  return roles
}

console.log(theBeatlesPlay())




// const facts = [
//         "He was the last Beatle to learn to drive",
//         "He was never a vegetarian",
//         "He was a choir boy and boy scout",
//         "He hated the sound of his own voice"
//       ];

function johnLennonFacts(facts) {
  
  var loudFacts = []
      
  for (let i=0; i < facts.length; i++) {
    loudFacts.push(facts[i] + '!!!')
  }    
  
  return loudFacts
}



function iLoveTheBeatles(num) {
  var arr = []
  
  function increment1(num) {
    num = num + 1
    return num
  }
  
  do {
    arr.push("I love the Beatles!")
    num = num + 1
  } while (increment1(num) <= 15);
  
  return arr
}

console.log(iLoveTheBeatles(7))
