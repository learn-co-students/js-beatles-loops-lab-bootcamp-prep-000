function theBeatlesPlay(musicians, instruments) {
  var answers= [];
  for (var i = 0; i < musicians.length; i++){
    answers.push(musicians[i] + " plays " + instruments[i])
  }
  return answers
}


//     //second test

function johnLennonFacts(facts) {
  var answers= [];
  var i = 0;
  while (i < facts.length){
    answers.push(facts[i] + '!!!');
    i++;
    }
  return answers
}
    
//     //third test

function iLoveTheBeatles(number) {
  var answers= [];
  do {
    answers.push('I love the Beatles!');
    number++;
  } while 
      (number < 15 && ((15-number) > 0));
    return answers
}

//     function iLoveTheBeatles(number) {
//       var answers = [];
// <<<<<<< HEAD
//       do {(answers.push('I love the Beatles!') &&
//       number++)}
//       while (number < 15)
//       return answers;
// =======
//       number = 0;
//       do {(answers.push('I love the Beatles!') &&
//       number++)}
//       while ((15 - number < 15 )
//       )return answers;
// >>>>>>> c5ed00e7264656be3832311ba882bd927b956b03
//     }
     
     