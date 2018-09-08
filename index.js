
var emptyArray = [];

function theBeatlesPlay(musicians, instruments){
  
  for (var i=0, l = musicians.length; i < l; i++)
  {
  emptyArray.push(musicians[i] + " plays " + instruments[i]);
  console.log(musicians[i] + " plays " + instruments[i]);
  }
 return emptyArray;  
}

//johnLennonFacts 

function johnLennonFacts(facts){
  var factsArray = [];
  var fL = facts.length;
  var i = 0;
  while (fL>i)
  {
    
    console.log(facts[i]+"!!!" );
    factsArray.push(facts[i]+"!!!" );
    i++;
  }
  return factsArray;
}

//I love the Beatles
 var number;

function iLoveTheBeatles(number){
 var newArray=[];
   do {
     newArray.push("I love the Beatles!");
	 //console.log("I love the Beatles!");
     number++;
   }
   while (number<15)
   
   return newArray;
 }

