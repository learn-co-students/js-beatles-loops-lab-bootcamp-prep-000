// add solution here

function theBeatlesPlay(musicians, instruments) {
  var answers= [];
  for (var i = 0; i < musicians.length; i++){
  answers.push(musicians[i] + ' plays ' + instruments[i]);
      }
    return answers;
    }
    
    //second test
    
    function johnLennonFacts(facts) {
// i stands for factsIndex

      var factsWithExclamationPoints = [];

      var i = 0;
      while (i < facts.length){
        factsWithExclamationPoints.push(facts[i]+'!!!');
        i++;
      }
      return factsWithExclamationPoints
    }
    
     //third test
     function iLoveTheBeatles(number) {
       var answers = [];
       do {(answers.push('I love the Beatles!') &&
       number++)}
       while (number < 15)
       return answers;
     }
     
     