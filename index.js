function theBeatlesPlay(musicians,instruments) {
  var emptyArray = []
  for(let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return emptyArray
}
/*ran learn test using var str = "!!!" and gave error*/
function johnLennonFacts (arr)  {
  var strArr = [ ]; //changed from var str = "!!!"
  let i = 0;

  while (i < arr.length) {
    strArr.push(arr[i] + "!!!");
    i++;
    }
    return strArr;
}

function iLoveTheBeatles ( n ) {
  var arr =[ ]
  var str = "I love the Beatles!"
do {
  n++
  arr.push(str)
}
    while ( n < 15 ); //always use semicolon after the while in a
    //do while loop because considered poor style not to it can lead
    //to syntax error
    return arr
}

/*

do {
  _this(), _that(), _theOtherThing();
} while (flag);   // flag could be falsy

while(theMoon === "rising") flippittygibbitt(); the curly braces have been omitted on this line of code
