function theBeatlesPlay(musicians,instruments) {
  var a = [];
  var b = musicians.length
  var i;
  for (i = 0; i < b; i++) {
    a.push(musicians[i] +" plays " + instruments[i]);
  
  }
  return a;
}

function johnLennonFacts(facts) {
  var i=0;
  while(i<facts.length) {
    facts[i]=facts[i] + "!!!";
    i++;
    
  }
  return facts
}

function iLoveTheBeatles(num) {
  var foo = [];
  do {foo.push("I love the Beatles!")
    i++;
  }
      
  while (i<=15);
  return foo
}

/*
var test = [];
test.push(`I love the Beatles!`);
console.log(test);
for (i=0;i<15;i++) {
  test.push(`I love the Beatles! ${i}`);
}
console.log(test);
*/

var i=0;
var test2 = [];
do {test2.push(`I love the Beatles!`);
    i++;
}
while (i<=7)

console.log(test2);
