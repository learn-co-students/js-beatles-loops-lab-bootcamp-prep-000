
function theBeatlesPlay(arrayMusicians, arrayIntruments)
{
  // 2
  var emtArray = [];
  for (var i = 0 ; i < arrayMusicians.length; i++)
  {
   var string = arrayMusicians[i] + ' plays ' +          arrayIntruments[i];
    emtArray.push(string);
  }
  return emtArray;
}

function johnLennonFacts(arr){
    var i = 0;
    var stringA = [];
    var string ;
    while(i<arr.length){
        string = arr[i]+"!!!";
        stringA.push(string);
        i += 1;}
    return stringA;
}

function iLoveTheBeatles(n)
{
  var emptyArray = [];
  var i = 0 ;
  do
  {
      emptyArray.push("I love the Beatles!")
      n += 1;
  } while (n<15);
  return emptyArray;
}

