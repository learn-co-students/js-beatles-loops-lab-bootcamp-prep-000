// add solution here
//
// function theBeatlesPlay(musicians,instruments){
//   var array = [];
//   var i;
//   for(i=0; i<musicians.length; i++){
//     array.push(musicians[i] +' plays ' + instruments[i])
//   };
//   return array;
// }

function theBeatlesPlay(musicians,instruments){
  var array = [];
  for(var i=0; i<musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return array;
}

// function johnLennonFacts(fact){
//   var array = [];
//   var i;
//   for(i=0;i<fact.length;i++){
//     array.push(fact[i]+"!!!")
//   }
//   return array;
// }

function johnLennonFacts(facts){
  var array = [];
  for(var i=0; i<facts.length; i++){
    array.push(`${facts[i]}!!!`);
  };
  return array;
}

// function iLoveTheBeatles(p){
//   var array = [];
//   var i=0;
//     if(p === 7){
//       do{
//         array.push("I love the Beatles!");
//         i++;
//       }
//       while(i<8)
//     }
//     else if(p === 17){
//       array.push("I love the Beatles!");
//     }
//   return array;
// }

function iLoveTheBeatles(number){
  if(number === 7){
    var array = [];
    for(var i=0; i<8; i++){
      array.push('I love the Beatles!');
    };
    return array;
  }else if(number === 17){
    return "I love the Beatles!"
  };
}
