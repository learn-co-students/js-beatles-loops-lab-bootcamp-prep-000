
function theBeatlesPlay(musicians, instruments){
  
var  playlist= []

for(let i = 0; i < 3; i++){
 
 playlist.push('musicians[${i}] plays instruments[${i}]') 
}   
return playlist
}
