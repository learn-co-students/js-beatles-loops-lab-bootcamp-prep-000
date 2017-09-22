function theBeatlesPlay(musicians,instruments){
var derp = [''];
var i
  for ( i = 0 ; i < musicians.length ; i++ ) {

    if ( i === 0){
      derp[i] = musicians[i] + ' plays '+instruments[i]
    }else{
      derp.push(musicians[i] + ' plays '+instruments[i])
    }
  }
  return derp
}


function johnLennonFacts(facts){
var exclamation = ['']
var i = 0
  while (i < facts.length) {
    exclamation[i] = facts[i] + '!!!'
    i++
  }
  return exclamation
}

/*
+ Create a function `iLoveTheBeatles` which accepts a number as a parameter.
 The body of the function should create a variable that stores an empty array.
 Then, implement a do-while loop inside the function that adds `"I love the Beatles!"`
  to the empty array. Then the loop should increment the number passed in as a parameter.
  The condition of the loop should check to see that the parameter number is less than `15`.
  The function should return the array with the strings `"I love the Beatles!"`.
<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-beatles-loops-lab' title='Beatles Loops'>Beatles Loops</a> on Learn.co and start learning to code for free.</p>
7 1
8
*/
function iLoveTheBeatles(number){
  var foo = ['']

  do {
    number++
    if (foo[0] == ''){
      foo[0] = 'I love the Beatles!'
   }else {
      foo.push('I love the Beatles!')
    }

  } while (number < 15);

  return foo
}
 
