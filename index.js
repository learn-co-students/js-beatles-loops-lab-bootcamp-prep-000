function theBeatlesPlay(musicians, instruments){
var musc= [[], musicians:[instruments]]
for (let i=0; i<3; i++) {
musc[i].push("'$(musicians)' played '$(instruments)'")
}
return musc
}
