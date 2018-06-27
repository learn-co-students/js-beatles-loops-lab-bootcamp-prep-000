 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 
const facts= [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ]    
var n=Math.floor(100*Math.random())



console.log(iLoveTheBeatles(3))

function iLoveTheBeatles(x){
  var array=[]
  var i=0

  do {
  array[i]="I love the Beatles!"
    console.log("i is "+i)
    console.log("x is "+x)
 i++ 
  }while (i<=x && x<15)

  return array

}




function theBeatlesPlay(x,y){
  var array=[];
  for (let i=0;i<instruments.length;i++){
    array[i]=musicians[i]+" plays "+instruments[i]
  } 
  return array
}

function johnLennonFacts(x){
  var i=0
  while (i<x.length){
    x[i]=x[i]+"!!!"
    i++
  }
  return x
}

