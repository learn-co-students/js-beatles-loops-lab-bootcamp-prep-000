function theBeatlesPlay (musicians, instruments) {
  var emptyarray = new Array()

  for (var i=0; i<musicians.length; i++) {
    emptyarray.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return emptyarray
} // add solution here

function johnLennonFacts (facts) {

  var i=0;
  var betterfacts = new Array();

  while(i<facts.length) {
    betterfacts[i]=(facts[i]+"!!!");
    i++;
  }
  return betterfacts
}

function iLoveTheBeatles (numb) {

  var emptyinside = new Array();
  var i = numb;

  do {
    emptyinside.push("I love the Beatles!");
    i++;
  } while (i<15)

  return emptyinside;

}
