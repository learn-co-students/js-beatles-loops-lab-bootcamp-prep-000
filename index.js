function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  array[i] = musicians[i] + " plays " + instruments[i];
    }
    return array
}

function johnLennonFacts(facts){
  var i = 0;
  let faq = []
  while(i < facts.length){
    faq.push(facts[i] + '!!!');
    i++;
  }
    return faq
}

function iLoveTheBeatles(n){
  var statement = []
  do{
    statement.push("I love the Beatles!");
    n++;
  } while (n < 15);
    return statement
}
