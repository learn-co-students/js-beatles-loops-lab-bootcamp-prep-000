// add solution here


function theBeatlesPlay(a,b){
 var beatles = []
 for (let i=0;i<a.length;i++){
    var newString = `${a[i]} plays ${b[i]}`
    beatles.push(newString)
  }
  return beatles
}

 
 function johnLennonFacts(facts){
     let i=0
     var allFacts = []
     while(i<facts.length){
       var newFact = `${facts[i]}!!!`
       allFacts.push(newFact)
       i++
   }
   return allFacts
}
 
function iLoveTheBeatles(n){
  var loveLove =[]
  do{
    loveLove.push("I love the Beatles!")
    n++
  }while(n<15);
  return loveLove
}