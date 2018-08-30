// add solution here
//for ([initialization]; [condition]; [iteration]) {
//  [loopBody];
//}

//initialization: An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword
//condition: An expression evaluated before each loop iteration. If this expression evaluates to true, statement is executed
//iteration: A statement executed at the end of each iteration. Typically, this will involve incrementing or decrementing a counter, bringing the loop ever closer to its end
//loopBody: Code which runs on every iteration as long as the condition evaluates to true
//Use a for loop when you know how many times you want the loop to run (for example, when you have an array of known size).
function theBeatlesPlay(musicians,instruments){
  var emptyArray = [];
  for (let i=0;i<musicians.length; i++) {
    emptyArray.push(musicians[i]+" plays "+instruments[i])
  }
  return emptyArray;
}

function johnLennonFacts(facts){
  var i=0;
  while (i<facts.length) {
    facts[i]+="!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  let emptyArray = [];
  do {
  emptyArray.push("I love the Beatles!");
  number++;
  }
  while(number<15);
  return emptyArray;
}