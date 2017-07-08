function theBeatlesPlay(musicians,instruments){
  var temp=[]
  for(var i=0;i<musicians.length;i++){
    temp.push(musicians[i]+' plays '+instruments[i])
  }
return temp}

function johnLennonFacts(arr){
  var count=0
  while (count<arr.length){
  arr[count]=arr[count]+'!!!'
  count++
  }
return arr}

function iLoveTheBeatles(num){
  var soln=[]
  do{soln.push("I love the Beatles!"); num++}while(num<15)
return soln}
