// add solution here

//Test 1
function theBeatlesPlay(){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  const musiciansInstruments = [];
  
  for (var i = 0; i < musicians.length; i++){
    musiciansInstruments.push(musicians[i] + " plays " + instruments[i])
  }
  console.log(musiciansInstruments)
  return musiciansInstruments
}

theBeatlesPlay()


//Test 2
function johnLennonFacts(facts){
  var counter = 0
        
  while (counter <= facts.length-1){
    facts[counter] = facts[counter] + "!!!"
    counter++
  }
 console.log(facts)
  return facts     
}

johnLennonFacts(["He was basic", "The Beatles are Irrelevant", "But still cool I guess"])

//Test 3 
function iLoveTheBeatles(n){
  var myArray = [];
  
  do {
  myArray.push("I love the Beatles!");
  n--
} while (n < 15 && n >=0);

console.log(myArray)
return myArray
}

iLoveTheBeatles(7)
iLoveTheBeatles(17)
