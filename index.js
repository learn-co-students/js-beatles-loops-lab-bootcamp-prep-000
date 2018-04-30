function theBeatlesPlay(musicians, instruments) {
    var newstring = [];
    for(var i = 0, x =0; i < musicians.length || x < instruments.lenght; i++, x++) {
        newstring.push(`${musicians[i]} plays ${instruments[x]}`)

    }
return newstring
}

function johnLennonFacts(facts){
  var i = 0
  var newfacts = []
    while ( i < facts.length) {
      newfacts.push(`${facts[i]}!!!`)
      i++;
    }
return newfacts
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  do{ emptyArray.push('I love the Beatles!');
  num++

} while (num<15)
return emptyArray
}
