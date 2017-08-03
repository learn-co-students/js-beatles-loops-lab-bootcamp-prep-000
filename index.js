
function theBeatlesPlay(MusArray,InsArray)
{   var NEWArray = [];
     var ArraySiz = MusArray.length ;
    { for (let i = 0; i < ArraySiz; i++)
        NEWArray.push(MusArray[i]+" plays "+InsArray[i]); };
  return NEWArray};

function johnLennonFacts(FactArray) {
var FactArray = FactArray;
 var NEWArray = [];
       var i = 0;
       var number = FactArray.length;
      while ( i < number )    // FactArray[i] )
      { NEWArray.push(FactArray[i]+"!!!");
        i++;  }
return NEWArray };

//  var number = 17;
function iLoveTheBeatles(number) {
var i = 0;
var counter = 0;
var NEWArray = [];
//  console.log('number:');
if (number > 15) { counter = 15;} else {counter = number;}
do {
   {NEWArray.push("I love the Beatles!");   i++; }
  }
while( i < counter);
console.log('1Array: '+NEWArray);
  return NEWArray; }
//iLoveTheBeatles(7);
//iLoveTheBeatles(17);
