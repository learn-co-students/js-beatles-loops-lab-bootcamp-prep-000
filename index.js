const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  var emptyArray=[];
  for(let counter=0; counter<musicians.length; counter++) {
    emptyArray.push(`${musicians[counter]} plays ${instruments[counter]}`)
}
return emptyArray;
}

const facts = ["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"]
function johnLennonFacts(facts){
  var newFacts =[]
  while(var i < facts.length) {
    newFacts.push(facts[i] + "!!!"); i++ ;
  }
  return newFacts;
}





