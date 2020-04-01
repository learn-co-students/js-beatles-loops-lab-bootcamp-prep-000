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