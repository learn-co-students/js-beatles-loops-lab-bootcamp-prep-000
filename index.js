function theBeatlesPlay(musicians, instruments){
var muscicians = []
var instruments= []
var strings = []
for (let i=0; i<3; i++) {
strings.push("'$(musicians[i])' played '$(instruments[i])'")
}
return strings
}
