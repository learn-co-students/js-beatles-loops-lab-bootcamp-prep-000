function theBeatlesPlay(musicians,instruments){
  var emp = []
  for (var i = 0; i <musicians.length; i++){
    emp.push(musicians[i] + ' ' + 'plays'+ ' ' + instruments[i]);
  }
  return emp;
}

function johnLennonFacts(facts){
  var newfact = [ ]
  var i = 0
  while (i < facts.length){
      newfact.push(facts[i] + "!!!")
      i++
    }
  return newfact;
}

function iLoveTheBeatles(number){
  var ary = []
  do { ary.push("I love the Beatles!");
      number ++;
       }
  while (number <15);
  return ary;
}
