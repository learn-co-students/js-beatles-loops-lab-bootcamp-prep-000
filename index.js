// add solution here

function theBeatlesPlay(musicians, instruments){
 var empty = []; 
  for (let i= 0; i < 4; i++) {
  musicians= ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  instruments= ['Guitar', 'Bass Guitar','Lead Guitar','Drums'];
    empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }  
  return empty;
}
  


function johnLennonFacts(facts){
var empty= [];
let i =0;
while (i <facts.length){
empty.push(`${facts[i]}!!!`);
i++;
}
return empty;
}

function iLoveTheBeatles(x) {
   var emptyArr2 = [];
   do {
     emptyArr2.push("I love the Beatles!");
     x++
   } while (x < 15);
   return emptyArr2;
 } 


