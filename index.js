// add solution here
function theBeatlesPlay(arraym,arrayi){
var em = []
for (var i = 0; i < arraym.length; i++) {
  em[i] = arraym[i] + ' plays ' + arrayi[i]
}
return em
}

function johnLennonFacts(facts){
var i = 0;
var newfacts=[];
while (facts.length > i) {
newfacts.push(facts[i]+"!!!")
  i++;
}
return newfacts
}

function iLoveTheBeatles(n){
var em = [];
do {
em.push("I love the Beatles!")
} while (n < 15);
n++
}
