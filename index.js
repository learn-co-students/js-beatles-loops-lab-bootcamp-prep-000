

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];





function theBeatlesPlay(musicians, instruments) {
  const array = []
  for(let i=0; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];



  
  function johnLennonFacts(facts)  {
  const array = []
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++;
  }
  return array;
}




function iLoveTheBeatles(count) {
    var string = "I love the Beatles!"
    var newArray = []
    if (count === 17) {
      return string 
    }
    for (let i=0; i< count + 1; i++ ) {
      newArray.push(`${string}`)
    }
    return newArray
  }
  









