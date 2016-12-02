var theBeatlesPlay = (musicians, instruments) => {var array = []; for(var i=0; i<4; i++){array.push(`${musicians[i]} plays ${instruments[i]}`)}; return array}
var johnLennonFacts = (facts) => {var array = []; var j = 0; var i = facts.length; while(i>j){array.push(`${facts[j]}!!!`); j++}; return array}
var iLoveTheBeatles = (number) => {var array = []; do{array.push("I love the Beatles!"); number++} while(number<15); return array}
