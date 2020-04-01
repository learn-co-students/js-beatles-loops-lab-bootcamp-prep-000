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
        "He hated the sound of his own voice" ]
function johnLennonFacts(){
  
        for(var x=0;x<johnLennonFactsArr.length;x++){
          JohnLennonFacts.push(`${johnLennonFactsArr[x]}!!!`)
        }
        return JohnLennonFacts
}
var num=18
function iLoveTheBeatles(num){
  var iLoveTheBeatlesArr=[]
var i=0
  do{
    ++i
if(i==17){
   iLoveTheBeatlesArr.push("I love the Beatles!"+ i)
}
  }while (i<num)
return iLoveTheBeatlesArr
}