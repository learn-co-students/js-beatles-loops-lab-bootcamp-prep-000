var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Base Guitar","Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay(musicians, instruments)
{
   var arr = [];
   for(var i = 0; i <musicians.length;i++)
   {
       arr[i] = musicians[i] + " plays " + instruments[i];
   }
   return arr;
}

function johnLennonFacts(facts)
{
      var i = 0;
      var arr2 = [];
      while( i < facts.length)
      {
          arr2[i] = facts[i] +"!!!";
          i++;
      }
      return arr2;
}

function iLoveTheBeatles(num)
{
     var i = 0;
     var arr3 = [];
     do{
         arr3[i] = "I love the Beatles!";
         i++;
         num++;
     }while(num < 15)
     return arr3;
}
