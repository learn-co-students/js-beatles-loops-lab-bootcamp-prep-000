function theBeatlesPlay(musicos,instruments) {
var Lista = new Array()
  for (var i = 0; i < musicos.length; i++) {
    Lista[i]=(musicos[i] + " plays " + instruments[i])
  }
  return Lista
}

function johnLennonFacts(facts){
var a=0
while (a<facts.length) {
  facts[a]=facts[a]+"!!!"
a=a+1
}
return facts
}

function iLoveTheBeatles(number){
var a=0
var Lista = new Array()
if (number>14) {
return "I love the Beatles!"
}
else {
do {
Lista[a]="I love the Beatles!"
a=a+1
} while (a<=number);
return Lista
}
}