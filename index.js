function theBeatlesPlay(musicians,instruments) {
  var array=[];
  for(let i=0;i<musicians.length;i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  let i=facts.length;
  let j=0;

  while (i>0) {
    facts[j]=facts[j]+"!!!";
    i--;
    j++;
  }

  return facts;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push('I love the Beatles!')
    number++;
  } while (number < 15);
  return newArray;
}
