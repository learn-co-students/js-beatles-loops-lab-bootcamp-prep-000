function theBeatlesPlay(musicians, instruments) { //[john, paul, george, ringo]

 var Beatles = []

  for (let i = 0; i < 4; i++ ) {

    Beatles.push (`${musicians[i]} plays ${instruments[i]}`)
  }
  return Beatles
}


function johnLennonFacts (array) {

var newArray = []
let i= 0

while (i < array.length){

/// i++ => if this code is here. {array[0]} wont
///run b/c i will increase before code reaches line 23.

newArray.push (`${array[i]}!!!`)

i++ /// very important! i increments as code runs after line 20.

}
return newArray
}


function iLoveTheBeatles(n) {

  var newArray = []

  do {
        newArray.push ('I love the Beatles!');
          n++ ;
    }
    while ( n < 15);

    return newArray
  }
