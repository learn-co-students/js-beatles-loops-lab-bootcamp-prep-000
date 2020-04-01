// add solution here
var theBeatlesPlayArr=[];
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];



  for(var i=0;i<musicians.length;i++){
    console.log(musicians[i])
    var musician=musicians[i]
console.log(instruments[i])
var instrument=instruments[i]
 theBeatlesPlay(musician,instrument)

  }

function theBeatlesPlay(musician,instrument){
 
theBeatlesPlayArr.push(`${musician} plays ${instrument}`)
    console.log(theBeatlesPlayArr)
}