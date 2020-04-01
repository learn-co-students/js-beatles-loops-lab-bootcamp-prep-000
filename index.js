// add solution here
var theBeatlesPlayArr=[];
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musician,instrument){
  for(var i=0;i<musicians.length;i++){
        var musician=musicians[i]
var instrument=instruments[i]
theBeatlesPlayArr.push(`${musician} plays ${instrument}`)
   }
return theBeatlesPlayArr
}
var JohnLennonFacts=[]
var johnLennonFactsArr=[
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice","While on tour, he enjoyed playing Monopoly",
    "Harmonica was the first instrument Lennon learned to play" ]
function johnLennonFacts(){
  
        for(var x=0;x<johnLennonFactsArr.length;x++){
          JohnLennonFacts.push(`${johnLennonFactsArr[x]}!!!`)
        }
        return JohnLennonFacts
}

function iLoveTheBeatles(){
  var iLoveTheBeatlesArr=[]
var i=0
  do{
    ++i
   iLoveTheBeatlesArr.push("I love the Beatles!")
  }while (i<7)
return iLoveTheBeatlesArr
}