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
  var i = 0;
  var newFacts =[]
  while( i < facts.length) {
    newFacts.push(facts[i] + "!!!"); i++ ;
  }
  return (newFacts);
}

function iLoveTheBeatles(n) {
  var love = [];
  do{
    love.push('I love the Beatles!'); n++
    }while(n<15)
  
  return love;
}



